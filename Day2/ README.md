# Generative AI & Prompt Engineering — Technical Deliverable

> **Track:** Backend Node.js  
> **Organization:** Information Technology Institute (ITI)

---

## 📌 Overview

This repository contains the technical deliverable and implementation code for the **Generative AI & Prompt Engineering** assignment. It covers an in-depth evaluation of leading Node.js AI frameworks (**LangChain.js** vs. **LlamaIndex.TS**), an end-to-end **Retrieval-Augmented Generation (RAG)** pipeline implementation, and a custom **Semantic Caching system using Redis** to optimize LLM performance and token costs.

---

## 📑 Project Structure

```bash
.
├── src/
│   ├── services/
│   │   └── ragService.ts      # LangChain.js + Pinecone RAG Pipeline
│   └── cache/
│       └── semanticCache.ts    # Redis-based Semantic Caching Solution
├── README.md                   # Project documentation
├── package.json                # Project dependencies and scripts
└── .env.example                # Environment variables template
```

---

## 🛠️ Key Technical Components

### 1. Framework Evaluation (LangChain.js vs. LlamaIndex.TS)

- **LangChain.js**: Selected for modularity and fine-grained control over execution flows via LCEL (LangChain Expression Language).
- **LlamaIndex.TS**: Evaluated for structured data parsing and specialized RAG indexing strategies.

### 2. RAG Pipeline Implementation (`ragService.ts`)

- Integrated with **Pinecone** vector database and **OpenAI** (`text-embedding-3-small` & `gpt-4o`).
- Formats retrieved documents into explicit prompt templates for context-constrained answer generation.

### 3. Semantic Caching (`semanticCache.ts`)

- Implements cosine similarity search over cached vector embeddings in **Redis**.
- Bypasses LLM API calls when query intent similarity is $\ge 92\%$, reducing latency to `< 10ms` and saving up to $40-60\%$ on token costs.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: `v18.x` or higher
- **TypeScript**: `v5.x`
- **Redis Server**: Running locally or via Docker / cloud instance

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/generative-ai-iti-task.git
   cd generative-ai-iti-task
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory (refer to `.env.example`):
   ```env
   OPENAI_API_KEY=your_openai_api_key
   PINECONE_API_KEY=your_pinecone_api_key
   PINECONE_INDEX_NAME=your_index_name
   REDIS_URL=redis://localhost:6379
   ```

---

## 📦 Required Dependencies

The project relies on the following key packages:

```json
{
  "dependencies": {
    "@langchain/core": "^0.3.0",
    "@langchain/openai": "^0.3.0",
    "@langchain/pinecone": "^0.1.0",
    "@pinecone-database/pinecone": "^3.0.0",
    "redis": "^4.6.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
```

---

## 💡 Usage Example

```typescript
import { runLangChainRAG } from "./src/services/ragService";
import { SemanticCache } from "./src/cache/semanticCache";

async function main() {
  const cache = new SemanticCache();
  const userQuery = "What is the refund policy?";

  // 1. Check Semantic Cache
  const cachedResponse = await cache.getCachedResponse(userQuery);

  if (cachedResponse) {
    console.log("Response (from Cache):", cachedResponse);
    return;
  }

  // 2. Fetch from RAG Pipeline if Cache MISS
  const ragResponse = await runLangChainRAG(userQuery);
  console.log("Response (from RAG):", ragResponse);

  // 3. Save to Semantic Cache
  await cache.setCachedResponse(userQuery, ragResponse);
}

main().catch(console.error);
```

---

## 📄 Output Deliverables

- `README.md` — Complete project overview and setup instructions.
- `generative_ai_iti_Day2.pdf` — Comprehensive report & architectural evaluation.

---
