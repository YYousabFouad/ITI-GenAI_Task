import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { StringOutputParser } from "@langchain/core/output_parsers";
import {
  RunnableSequence,
  RunnablePassthrough,
} from "@langchain/core/runnables";
import { PromptTemplate } from "@langchain/core/prompts";

export async function runLangChainRAG(userQuery: string): Promise<string> {
  // 1. Initialize Pinecone Client
  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
  const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME!);

  // 2. Initialize Embeddings and Vector Store Retriever
  const embeddings = new OpenAIEmbeddings({
    modelName: "text-embedding-3-small",
  });
  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
  });
  const retriever = vectorStore.asRetriever({ k: 3 });

  // 3. Define Prompt Template
  const prompt = PromptTemplate.fromTemplate(`
    Answer the question based ONLY on the following context:
    {context}

    Question: {question}
    Answer:
  `);

  // 4. Initialize LLM Model
  const model = new ChatOpenAI({ modelName: "gpt-4o", temperature: 0 });

  // 5. Construct LCEL Chain
  const chain = RunnableSequence.from([
    {
      context: retriever.pipe((docs) =>
        docs.map((d) => d.pageContent).join("\n\n"),
      ),
      question: new RunnablePassthrough(),
    },
    prompt,
    model,
    new StringOutputParser(),
  ]);

  // 6. Execute Chain
  const response = await chain.invoke(userQuery);
  return response;
}
