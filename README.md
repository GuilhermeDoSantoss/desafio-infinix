# 🛍️ Product Management System
<div align="center">

Full Stack Application — Django + React + TypeScript

Interface moderna • API REST robusta • Docker Ready

</div>

## 📌 Sobre o Projeto

Aplicação full-stack para gerenciamento de produtos com operações completas de CRUD, desenvolvida com boas práticas de arquitetura, tipagem forte e separação clara de responsabilidades.

O objetivo é demonstrar domínio em:

Backend robusto com Django REST Framework

Frontend moderno com React + TypeScript

Organização de projeto e ambiente containerizado

## 🚀 Stack Tecnológica

### 🔹 Backend

Python 3.11

Django 4.2

Django REST Framework

SQLite

django-cors-headers


### 🔹 Frontend

React 18

TypeScript

TailwindCSS

Axios

### 🔹 DevOps

Docker

Docker Compose

## ✨ Principais Funcionalidades

### 🎨 Frontend

Interface responsiva (mobile-first)

Listagem de produtos em cards

Formulário com validação

Feedback visual com Toast

Confirmação antes de exclusão

Estados de loading

### 🔧 Backend

API RESTful completa

Validações via Serializer

Tratamento padronizado de erros

Django Admin configurado

Estrutura escalável

🐳 Execução com Docker (Recomendado)

1️⃣ Clonar repositório

git clone <repo>

cd product-management

2️⃣ Subir containers

docker-compose up --build

### 🔗 Acessos

Frontend: http://localhost:3000

Backend: http://localhost:8000

API: http://localhost:8000/api/products/

## 👤 Criar superusuário (opcional)

docker-compose exec backend python manage.py createsuperuser

💻 Execução Manual

### 🔹 Backend

cd backend

python -m venv venv

Linux/Mac

source venv/bin/activate

Windows

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver

Backend disponível em:

http://localhost:8000

### 🔹 Frontend

Abra um novo terminal:

cd frontend

npm install

npm start

Frontend disponível em:

http://localhost:3000

### 🔌 API Endpoints

Base URL

http://localhost:8000/api

Método	Endpoint	Descrição

**GET**	/products/	Listar produtos

**POST**	/products/	Criar produto

**GET**	/products/{id}/	Buscar produto

**PUT**	/products/{id}/	Atualizar produto

**PATCH**	/products/{id}/	Atualização parcial

**DELETE**	/products/{id}/	Remover produto

### ✅ Validações

Preço deve ser maior que zero

Nome é obrigatório

Retorno 404 para recurso inexistente

Respostas padronizadas de erro (400)

## 📁 Estrutura do Projeto

product-management/
│
├── backend/
│   ├── products/
│   ├── config/
│   └── manage.py
│
├── frontend/
│   ├── components/
│   ├── services/
│   ├── types/
│   └── App.tsx
│
└── docker-compose.yml

### 🔐 Observação

Projeto configurado para ambiente de desenvolvimento:

DEBUG = True

SQLite

CORS liberado para localhost

Para produção, recomenda-se:

Variáveis de ambiente

PostgreSQL

HTTPS

CORS restritivo

Autenticação/autorização

👨‍💻 Autor

Guilherme dos Santos Mendonça Enéas
Backend Engineer | Java & Python

<div align="center">

⭐ Projeto desenvolvido para avaliação técnica
Clean Code • Arquitetura organizada • Boas práticas

</div>
