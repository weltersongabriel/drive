# 🚗 Car Rental System — Full Stack JavaScript

Projeto **Full Stack** simples de **Aluguel de Carros**, desenvolvido com **Node.js no backend** e **React no frontend**, com foco em aprendizado prático e organização de projeto.

Este repositório foi criado para treinar os fundamentos do desenvolvimento full stack, incluindo comunicação entre frontend e backend, consumo de API e componentização com React.

---

## 📌 Visão Geral

- Backend: API REST simples para listagem e aluguel de carros
- Frontend: Interface em React consumindo a API
- Persistência: Em memória (sem banco de dados, por enquanto)
- Objetivo: **aprendizado e prática**

---

## 🧱 Tecnologias Utilizadas

### Backend
- Node.js
- Express
- JavaScript
- CORS

### Frontend
- React
- JavaScript
- Vite

---

## 📂 Estrutura do Projeto
```bash
aluguel-carros/
│
├── backend/
│ ├── package.json
│ └── server.js
│
└── frontend/
├── src/
│ ├── App.jsx
│ └── main.jsx
└── index.html
```



## 🚀 Como rodar o projeto

### ✅ Pré-requisitos
- Node.js instalado (versão LTS)
- NPM (vem junto com o Node)

Verifique com:
```bash
▶️ Backend (Node + Express)
1️⃣ Entrar na pasta do backend
cd aluguel-carros/backend

2️⃣ Inicializar o projeto Node
npm init -y

3️⃣ Instalar as dependências
npm install express cors

4️⃣ Rodar o servidor
node server.js


Se aparecer:

Backend rodando em http://localhost:3000


👉 Backend funcionando corretamente.

Teste no navegador:

http://localhost:3000/cars

▶️ Frontend (React)
1️⃣ Voltar para a pasta principal
cd ..

2️⃣ Criar o projeto React com Vite
npm create vite@latest frontend


Escolha:

Framework: React

Variant: JavaScript

3️⃣ Entrar no frontend e instalar dependências
cd frontend
npm install

4️⃣ Rodar o frontend
npm run dev


Acesse no navegador:

http://localhost:5173