import { createClient } from "redis";
import { OpenAIEmbeddings } from "@langchain/openai";

export class SemanticCache {
  private redisClient;
  private embeddings: OpenAIEmbeddings;
  private SIMILARITY_THRESHOLD = 0.92; // Cosine similarity threshold (92%)

  constructor() {
    this.redisClient = createClient({ url: process.env.REDIS_URL });
    this.redisClient.connect();
    this.embeddings = new OpenAIEmbeddings({
      modelName: "text-embedding-3-small",
    });
  }

  // Calculate Cosine Similarity between two vectors
  private cosineSimilarity(vecA: number[], vecB: number[]): number {
    const dotProduct = vecA.reduce((sum, a, idx) => sum + a * vecB[idx], 0);
    const normA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
    const normB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
    return dotProduct / (normA * normB);
  }

  async getCachedResponse(prompt: string): Promise<string | null> {
    const queryVector = await this.embeddings.embedQuery(prompt);
    const keys = await this.redisClient.keys("cache:*");

    for (const key of keys) {
      const cachedData = await this.redisClient.hGetAll(key);
      if (cachedData.vector) {
        const storedVector = JSON.parse(cachedData.vector);
        const similarity = this.cosineSimilarity(queryVector, storedVector);

        if (similarity >= this.SIMILARITY_THRESHOLD) {
          console.log(
            `[Semantic Cache HIT] Similarity: ${(similarity * 100).toFixed(2)}%`,
          );
          return cachedData.response;
        }
      }
    }
    console.log("[Semantic Cache MISS]");
    return null;
  }

  async setCachedResponse(prompt: string, response: string): Promise<void> {
    const queryVector = await this.embeddings.embedQuery(prompt);
    const cacheKey = `cache:${Date.now()}`;

    await this.redisClient.hSet(cacheKey, {
      prompt,
      response,
      vector: JSON.stringify(queryVector),
    });
  }
}
