<h1 align="center">Allen Xavier</h1>

<p align="center">
  <b>AI Software Engineer</b> · Architecting AI systems that run in production
  <br>
  WineConX · Berlin, Germany
</p>

<p align="center">
  <a href="https://allen-xavier.is-a.dev/"><img alt="Portfolio" src="https://img.shields.io/badge/Portfolio-allen--xavier.is--a.dev-0ea5e9"></a>
  <a href="https://linkedin.com/in/allen-xavier"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-allen--xavier-0077B5?logo=linkedin&logoColor=white"></a>
  <a href="mailto:xavierallem1999@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Email-xavierallem1999%40gmail.com-D14836?logo=gmail&logoColor=white"></a>
  <a href="https://arxiv.org/abs/2507.19354"><img alt="arXiv" src="https://img.shields.io/badge/arXiv-2507.19354-b31b1b?logo=arxiv&logoColor=white"></a>
</p>

---

## What I do

I design and build the AI systems behind a production platform: agent architectures, the
domain models they operate on, and the infrastructure that runs them.

Four products at [WineConX](https://wineconx.app) share one platform, layered as **entry →
agents → domain → adapters → infrastructure**. Agents sit above the domain and never below
it, so an agent can be rewritten without the business logic noticing. Providers sit at the
edge behind adapters, so changing a model is a configuration change rather than a migration.

| System | What it does |
| --- | --- |
| **Agent-orchestrated media house** | A director agent delegates to script writer, photographer and cinematographer agents, producing publishable copy, imagery and video end to end |
| **Automated destination desk** | A profile agent reads the conversation, a planner builds the itinerary, a booking agent routes each activity to a provider. Activities move `pending → confirmed` or `cancelled` |
| **Demand-driven instance automation** | Terraform provisions and de-provisions instances against workflow demand, robust enough to run unattended |
| **AI SEO** | Structuring sites so answer engines retrieve and cite them correctly, not only so crawlers rank them |

Before that, two years of applied research at FZI on multimodal LLM systems and graph
neural networks, published at IEEE ITSC.

---

## Stack

**Models & providers**
![OpenAI](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white)
![Anthropic](https://img.shields.io/badge/Anthropic%20Claude-D97757?logo=anthropic&logoColor=white)
![Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?logo=googlegemini&logoColor=white)
![Hugging Face](https://img.shields.io/badge/Hugging%20Face-FFD21E?logo=huggingface&logoColor=black)
![Ollama](https://img.shields.io/badge/Ollama-000000?logo=ollama&logoColor=white)
![vLLM](https://img.shields.io/badge/vLLM-1C3C3C)

**Agents & retrieval**
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?logo=langchain&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C)
![MCP](https://img.shields.io/badge/Model%20Context%20Protocol-0ea5e9)
![RAG](https://img.shields.io/badge/RAG-8E44AD)
![Chroma](https://img.shields.io/badge/Chroma-FF6B6B)
![pgvector](https://img.shields.io/badge/pgvector-4169E1?logo=postgresql&logoColor=white)

**Backend & data**
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)

**Infrastructure**
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?logo=terraform&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?logo=amazon-aws&logoColor=white)
![GCP](https://img.shields.io/badge/Google%20Cloud-4285F4?logo=google-cloud&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=github-actions&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?logo=linux&logoColor=black)

<details>
<summary><b>Machine learning and embedded foundations</b></summary>

<br>

![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?logo=pytorch&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?logo=tensorflow&logoColor=white)
![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?logo=opencv&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?logo=scikit-learn&logoColor=white)
![GNN](https://img.shields.io/badge/Graph%20Neural%20Networks-009688)
![CARLA](https://img.shields.io/badge/CARLA-37474F)
![C](https://img.shields.io/badge/C-00599C?logo=c&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?logo=c%2B%2B&logoColor=white)
![FreeRTOS](https://img.shields.io/badge/FreeRTOS-8BC3FC)
![ROS](https://img.shields.io/badge/ROS-22314E?logo=ros&logoColor=white)
![MQTT](https://img.shields.io/badge/MQTT-3C5280)
![Edge AI](https://img.shields.io/badge/Edge%20AI-43A047)

</details>

---

## Languages

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./assets/languages-dark.svg">
  <img alt="Language breakdown across public repositories" src="./assets/languages-light.svg" width="480">
</picture>

---

## Selected work

| Repository | What it is |
| --- | --- |
| [**latentsync_turbo**](https://github.com/xavierallem/latentsync_turbo) | Inference optimisation for LatentSync, an audio-conditioned latent diffusion model for lip sync. 4/8-bit Whisper quantisation, DPM-Solver, Flash Attention 2, within 8GB VRAM |
| [**helpai**](https://github.com/xavierallem/helpai) | Local RAG for legal document Q&A. Hybrid retrieval over dense embeddings, BM25 and a cross-encoder reranker, with source citations. FastAPI, Ollama, ChromaDB, LangChain |
| [**dynamic_agent_perception**](https://github.com/xavierallem/dynamic_agent_perception) | OpenCOOD fork: dynamic agent selection for collaborative perception, cutting V2V bandwidth with a RANSAC ground-truth filter |
| [**picoVision**](https://github.com/xavierallem/picoVision) | Edge AI vision assistant on a Raspberry Pi Pico, real-time recognition with voice feedback |
| [**SMOLES-Firmware**](https://github.com/xavierallem/SMOLES-Firmware) | Wearable posture monitoring with on-device ML. Best Product Award, KIT Student Innovation Lab |
| [**esp8266-Edge-ML**](https://github.com/xavierallem/esp8266-Edge-ML) | ML framework for the ESP8266 with memory and power constraints in mind |
| [**ArduinoMLib**](https://github.com/xavierallem/ArduinoMLib) | Lightweight ML primitives for Arduino |
| [**Speech-Recognition-ES**](https://github.com/xavierallem/Speech-Recognition-ES) | Embedded speech recognition with DFT-based real-time audio processing |

---

## Publications

- **EffiComm: Bandwidth Efficient Multi-Agent Communication** · IEEE ITSC 2025 · [arXiv](https://arxiv.org/abs/2507.19354)
  <br><sub>Graph neural networks with a mixture-of-experts architecture cut V2V perception bandwidth from 11.64MB to 1.90MB, an 83.7% reduction, holding 92% detection accuracy.</sub>
- **Patient Monitoring & Assisting System** · IEEE ICCST 2022 · [IEEE Xplore](https://ieeexplore.ieee.org/abstract/document/10040443)
- **Unknown Terrain Modelling using 3D Mapping** · ICCMC 2021 · [IEEE Xplore](https://ieeexplore.ieee.org/abstract/document/9418346)

---

## Experience

| Period | Role |
| --- | --- |
| Mar 2026 – Present | **AI Software Engineer** · WineConX, Berlin |
| Mar 2024 – Feb 2026 | **Research Assistant** · FZI Research Centre, Karlsruhe<br><sub>Multimodal LLM agents for UX evaluation: 3.2× throughput, 22% fewer hallucinations via RAG and QLoRA, served on vLLM, deployed on Kubernetes</sub> |
| Nov 2024 – May 2025 | **Master's Thesis, EffiComm** · FZI Research Centre |
| Feb 2023 – Mar 2024 | **Software Developer (Werkstudent)** · Vanory, Karlsruhe |
| Jan 2023 – Jan 2024 | **Software Developer (HiWi)** · RITA Project, Karlsruhe |
| 2021 – 2022 | Gupshup · Life Spark Technology, IIT Bombay · Metwiz Materials |

**MSc Electrical and Information Technology**, Karlsruhe Institute of Technology.

---

## Awards

- **Best Product Award** · SMOLEs, KIT Student Innovation Lab
- **IEEE publications** · three papers in international conferences

---

<details>
<summary><b>Certifications</b></summary>

<br>

**Machine learning**
- [Machine Learning Specialization](https://coursera.org/share/6aced8053fae106d038d6c391ccfc20f)

**Deep learning**
- [DeepLearning.AI TensorFlow Developer](https://coursera.org/share/916ab3e2d29d425d193212987d5b4bc1)
- [Simple Recurrent Neural Network with Keras](https://coursera.org/share/a8e2f30226bafe239b948d2c7aac8194)
- [Device-based Models with TensorFlow Lite](https://coursera.org/share/666237cc27cd13b447095a2292c53fd0)

**Autonomous systems**
- [Development of Secure Embedded Systems](https://coursera.org/share/9eb36d8acf114012c971a12f81b7e3ef)
- [Introduction to Self-Driving Cars](https://coursera.org/share/442ac5e7a30cf7bf6744fa7c107e2a6a)
- [State Estimation and Localization for Self-Driving Cars](https://coursera.org/share/df908ef3df46a349f007dda8c9e642eb)
- [Motion Planning for Self-Driving Cars](https://coursera.org/share/753e7ab694eda7e3c7975ffb31bd1684)

**Google Cloud**
- [Custom Prediction Routine on Google AI Platform](https://coursera.org/share/748de728851ae518c74eb3b17e482e67)
- [Google Cloud Platform Fundamentals: Core Infrastructure](https://coursera.org/share/a738eee5060230fb650382316856040b)

</details>

---

<p align="center">
  <b>Open to conversations about AI engineering and architecture roles.</b>
  <br>
  <a href="mailto:xavierallem1999@gmail.com">xavierallem1999@gmail.com</a> ·
  <a href="https://allen-xavier.is-a.dev/">allen-xavier.is-a.dev</a>
</p>

<!--
  The old stats and pinned-repo cards all came from github-readme-stats.vercel.app,
  which returns 503 for every request: the shared instance is over its Vercel quota
  and GitHub API rate limit. That is why nothing rendered.

  The language card above is rendered instead by .github/workflows/languages.yml,
  which calls the GitHub API with GITHUB_TOKEN (5,000 requests an hour) and commits
  assets/languages-{dark,light}.svg into this repository. GitHub then serves the
  image from here, so it cannot go down because of someone else's traffic.
  Edit EXCLUDE_REPOS in that workflow to keep vendored code out of the totals.
-->
