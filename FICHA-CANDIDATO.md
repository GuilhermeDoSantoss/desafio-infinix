# FICHA DO CANDIDATO

**Nome:** Guilherme dos Santos Mendonça Enéas  
**Email:** guilherme.devsoft@gmail.com  
**Data:** 04/03/2026

---

## 🚀 Como Rodar o Projeto

### Opção 1: Com Docker (Recomendado)

#### Pré-requisitos
- Docker
- Docker Compose

#### Passos

1. **Clone o repositório**

git clone <seu-repositorio>
cd product-management

2. **Suba os containers**
docker-compose up --build

Acesse as aplicações
Frontend: http://localhost:3000
Backend API: http://localhost:8000/api/products/
Admin Django: http://localhost:8000/admin

Criar superusuário (opcional)
docker-compose exec backend python manage.py createsuperuser

Opção 2: Sem Docker (Manual)

Pré-requisitos
Python 3.11+
Node.js 18+
npm ou yarn

Backend
Navegue até a pasta do backend
cd backend

Crie e ative o ambiente virtual

# Linux/Mac
python -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
venv\Scripts\activate

Instale as dependências
pip install -r requirements.txt

Execute as migrações
python manage.py migrate

Crie um superusuário (opcional)
python manage.py createsuperuser

Inicie o servidor
python manage.py runserver

O backend estará rodando em: http://localhost:8000

Frontend
Abra um NOVO terminal e execute:

Navegue até a pasta do frontend
cd frontend

Instale as dependências
npm install

Inicie o servidor de desenvolvimento
npm start

O frontend estará rodando em: http://localhost:3000