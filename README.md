# 🚀 AI-Powered Backend Development Assignments & Deliverables

This repository contains technical assignments and deliverables completed as part of the **Backend Node.js + Generative AI Track** at the **Information Technology Institute (ITI)**.

The project demonstrates how Artificial Intelligence can be integrated into the software development lifecycle to improve debugging, middleware development, architectural refactoring, framework evaluations, RAG pipelines, and semantic caching systems.

---

## 📑 Repository Structure

````bash
# 🚀 AI-Powered Backend Development Assignments & Deliverables

This repository contains technical assignments and deliverables completed as part of the **Backend Node.js + Generative AI Track** at the **Information Technology Institute (ITI)**.

The project demonstrates how Artificial Intelligence can be integrated into the software development lifecycle to improve debugging, middleware development, architectural refactoring, framework evaluations, RAG pipelines, and semantic caching systems.

---

## 📑 Repository Structure

```bash
ITI/
│
├── Day1/
│   ├── Task1-Ai_Debugging/
│   │   ├── IMAGES/
│   │   ├── node_modules/
│   │   ├── .gitignore
│   │   ├── AI_Response.md
│   │   ├── comparison.md
│   │   ├── errors.md
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── prompts.md
│   │   ├── README.md
│   │   └── server.js
│   │
│   ├── Task2_Express_Middleware/
│   │   ├── Images/
│   │   ├── node_modules/
│   │   ├── .gitignore
│   │   ├── AI_Response.md
│   │   ├── code_review.md
│   │   ├── comparison.md
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── prompts.md
│   │   ├── README.md
│   │   └── server.js
│   │
│   └── Task3_Code_Review_Refactoring/
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       ├── IMAGES/
│       ├── models/
│       ├── node_modules/
│       ├── routes/
│       ├── .env
│       ├── .gitignore
│       ├── AI_Response.md
│       ├── code_review.md
│       ├── comparison.md
│       ├── issues.md
│       ├── package-lock.json
│       ├── package.json
│       ├── prompts.md
│       ├── README.md
│       └── server.js
│
├── Day2/
│   ├── README.md                      # Day 2 specific documentation
│   ├── generative_ai_iti_Day2.pdf     # Architecture & Evaluation PDF Deliverable
│   ├── ragPipeline.ts                 # LangChain.js + Pinecone RAG Pipeline Implementation
│   └── semanticCache.ts               # Redis-based Semantic Caching System
│
└── README.md                          # Main repository overview```

---

## 📅 Course Modules & Tasks

### 📍 Day 1: AI-Assisted Backend Development

#### 🐛 Task 1 – AI-Assisted Debugging

- **Objective:** Debug and fix legacy Express.js applications with AI assistance.
- **Key Achievements:** Fixed routes, missing middleware, incorrect HTTP verbs, and standardized API responses while comparing manual vs. AI-assisted debugging workflows.

#### 🛠️ Task 2 – AI-Assisted Middleware Development

- **Objective:** Design reusable Express middlewares using prompt engineering.
- **Key Achievements:** Created custom Logger, API Key Auth, and Request Validation middlewares with AI code review and optimization.

#### 🔄 Task 3 – AI-Powered Code Review & Refactoring

- **Objective:** Refactor a legacy monolithic Express + MongoDB application.
- **Key Achievements:** Transitioned code to clean MVC Architecture, introduced Mongoose schemas, added robust async error handling, and generated structural technical docs.

---

### 📍 Day 2: Advanced Generative AI, RAG & Semantic Caching

#### ⚖️ Task 1 – Framework Evaluation (LangChain.js vs. LlamaIndex.TS)

- **Objective:** Conduct a comparative study on Node.js/TypeScript AI frameworks for production RAG pipelines.
- **Key Achievements:** Evaluated integration complexity, vector database flexibility (Pinecone/ChromaDB), memory persistence (Redis/MongoDB), and selection criteria.

#### 🔍 Task 2 – End-to-End RAG Pipeline (`ragService.ts`)

- **Objective:** Build a context-aware Retrieval-Augmented Generation system.
- **Key Achievements:**
  - Integrated **Pinecone** vector database with **OpenAI** (`text-embedding-3-small` & `gpt-4o`).
  - Utilized **LangChain Expression Language (LCEL)** for declarative chain execution.
  - Formatted strict system prompts to eliminate hallucination.

#### ⚡ Task 3 – Semantic Caching System (`semanticCache.ts`)

- **Objective:** Optimize LLM cost and latency using vector search in Redis.
- **Key Achievements:**
  - Implemented Cosine Similarity ($\ge 92\%$) over query embeddings stored in Redis.
  - Reduced repetitive query latency from $\sim 2000	ext{ms}$ to $< 10	ext{ms}$.
  - Decreased OpenAI API token expenses by $40-60\%$.

---

## 💻 Technologies & Libraries Used

| Ecosystem               | Tools & Technologies                                                                          |
| :---------------------- | :-------------------------------------------------------------------------------------------- |
| **Backend & Runtime**   | Node.js, Express.js, TypeScript                                                               |
| **Databases & Caching** | MongoDB, Mongoose, Redis, Pinecone Vector DB                                                  |
| **AI & LLM Frameworks** | OpenAI API (GPT-4o), LangChain.js (`@langchain/openai`, `@langchain/pinecone`), LlamaIndex.TS |
| **Utilities & Tooling** | `dotenv`, Git, GitHub, WeasyPrint (Technical PDF Generation)                                  |

---

## 🤖 AI Integration & Best Practices

Throughout both days, Artificial Intelligence (ChatGPT / Claude / Gemini) was leveraged to:

- Accelerate legacy code debugging and error resolution.
- Enforce MVC patterns and code modularization.
- Generate complex TypeScript code for RAG chains and vector mathematical calculations.
- Produce technical documentation, architecture evaluation matrices, and Markdown reports.

> **Note:** All AI-generated suggestions were thoroughly audited, refactored, and tested for performance, security, and type safety before being committed.

---

## 👨‍💻 Author

**Yosab Fouad**
_Computer Science Student | Backend Node.js Trainee_
\_Information Technology Institute (ITI)
````
