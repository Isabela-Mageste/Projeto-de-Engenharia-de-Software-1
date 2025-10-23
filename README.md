# 🎬 StreamHub

**Plataforma de streaming multimídia com recomendação emocional e curadoria colaborativa baseada em IA.**

Projeto desenvolvido como **Trabalho de Conclusão da Atividade Prática – Ciclo Completo de Desenvolvimento de Software**  
Disciplina de **Engenharia de Software – Universidade Federal de Alfenas (UNIFAL-MG)**  
Ano: **2025**

---

## 🧠 Sobre o Projeto

O **StreamHub** é uma plataforma global de streaming de vídeo e música, projetada para oferecer **recomendações personalizadas**, **alta disponibilidade (99,99%)** e **baixa latência (≤2s)** no início do streaming.  
Sua arquitetura moderna em **microserviços** e o uso de **Inteligência Artificial (IA/ML)** garantem escalabilidade, performance e personalização profunda da experiência do usuário.

O projeto foi desenvolvido com foco em:
- Escalabilidade para até **10 milhões de usuários simultâneos**
- Cumprimento da **LGPD** e direitos autorais
- Experiência de usuário fluida e acessível
- Curadoria colaborativa e social entre usuários

---

## 🧩 Arquitetura do Sistema

A plataforma segue uma **arquitetura baseada em microserviços**, dividida em camadas independentes que se comunicam via **API Gateway**.

| **Camada** | **Descrição** | **Tecnologias Utilizadas** |
|-------------|---------------|-----------------------------|
| **Apresentação (Frontend)** | Interface do usuário web e mobile. | React.js, React Native |
| **Gateway / API** | Roteamento e autenticação de requisições. | NGINX, Express.js |
| **Negócio (Backend)** | Lógica da aplicação e microserviços independentes. | Node.js, FastAPI |
| **IA / Machine Learning** | Sistema de recomendação personalizada. | TensorFlow, Scikit-learn |
| **Dados (Persistência e Cache)** | Armazenamento estruturado e temporário. | PostgreSQL, Redis |
| **Armazenamento e CDN** | Entrega global e eficiente de mídias. | AWS S3, CloudFront |
| **Monitoramento e Segurança** | Controle, logs e conformidade. | Prometheus, Grafana |

---

## 🚀 Funcionalidades Principais

- 🧑‍💻 **Cadastro e login de usuários**
- 🎞️ **Streaming adaptativo** (480p, 720p, 1080p)
- 💡 **Recomendações personalizadas** com IA
- 🎧 **Criação e compartilhamento de playlists**
- ⭐ **Avaliações, comentários e favoritos**
- 📊 **Dashboard administrativo**
- 🌍 **Controle de licenças e geolocalização**
- 🔒 **Conformidade com LGPD e DRM**

---

## 🧰 Tecnologias Principais

**Frontend**
- React.js + TypeScript  
- React Native  

**Backend**
- Node.js (Express.js)  
- Python (FastAPI)  

**Banco de Dados**
- PostgreSQL  
- Redis  

**IA e Machine Learning**
- TensorFlow  
- Scikit-learn  

**Infraestrutura**
- Docker + Kubernetes (AWS)
- CloudFront (CDN) + S3 (Storage)
- Prometheus + Grafana (Monitoramento)

---

## 🧪 Testes

Foram realizados testes de:
- **Funcionalidade:** validação de login, cadastro e reprodução de conteúdo  
- **Integração:** comunicação entre microserviços  
- **Carga:** até 100 mil streams simultâneos  
- **Segurança:** proteção de acesso e restrição geográfica  
- **Usabilidade:** testes com usuários reais

**Resultados:**  
✅ 100% de sucesso nos testes funcionais  
⚡ Latência média: 1,6s  
🔒 Disponibilidade: 99,98%  
🎯 Precisão do sistema de recomendação: 84%

---

## 👥 Equipe

- Alice Lima Joyce  
- Ana Laura da Silva Oliveira  
- Bruno Spegiorin Moreno Gomes  
- Gabriela Mazon Rabello de Souza  
- Isabela Mageste de Andrade  
- Joaquim Pedro do Nascimento Moreira de Jesus  
- Victoria de Almeida Tambasco  

**Orientadora:** Prof.ª Mariane Moreira

---

## 📜 Licença

Este projeto foi desenvolvido exclusivamente para fins acadêmicos no curso de **Ciência da Computação - UNIFAL-MG (2025)**.  
O uso comercial do conteúdo é proibido sem autorização dos autores.

---
