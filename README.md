# Arquitetura Book 📚

Este projeto é composto por dois microsserviços independentes: `book` e `reservation`, que juntos formam uma aplicação para gerenciamento de livros e reservas.

## Alunos
 - Rafael Yuzo Fuzii | 22257557-2
 - Enzo D Andrey Lavieri Yarid | 22308404-2
 - Daniel Cardoso Martins | 22262100-2
 - Vitor Galetti Martins | 22019959-2
 - Mateus Felipe Brunetti dos Santos | 22012698-2


## 🧱 Estrutura do Projeto

```
arquitetura-book/
├── book/           # Microsserviço responsável pela gestão de livros
└── reservation/    # Microsserviço responsável pelo gerenciamento de reservas
```

## 🚀 Tecnologias Utilizadas

- NestJS
- MongoDB 
- Docker

## 📦 Pré-requisitos

- Node.js (^22.10)
- Yarn ou npm
- Docker e Docker Compose 
- MongoDB

## ⚙️ Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/RafaelFuzii/arquitetura-book.git
```

### 2. Instale as dependências de cada microsserviço

```bash
cd book
npm install
cd ..
cd reservation
npm install
```

### 3. (Opcional) Usando Docker Compose

Nos diretorios de book e rode o comando a baixo
```bash
docker-compose up --build
```

### 4. Iniciar os microsserviços

Cada serviço roda de forma independente:

```bash
# Terminal 1
cd book
npm run start

# Terminal 2
cd reservation
npm run start
```

## 📬 Comunicação entre Microsserviços
A comunicação entre `reservation` e `book` é feita por REST, usando Axios para as chamadas HTTP

### 📘 Book Service - `http://localhost:3000`

| Método | Rota                | Descrição                                      |
|--------|---------------------|------------------------------------------------|
| POST   | `/books`            | Cria um novo livro                             |
| GET    | `/books`            | Lista todos os livros                          |
| GET    | `/books/:isbn`      | Busca um livro pelo ISBN                       |
| PUT    | `/books/:isbn`      | Atualiza os dados de um livro específico       |
| PATCH  | `/books/:isbn/status` | Atualiza apenas o status do livro            |
| DELETE | `/books/:id`        | Remove um livro pelo ID                        |

### 📒 Reservation Service - `http://localhost:3001`

| Método | Rota                        | Descrição                                      |
|--------|-----------------------------|------------------------------------------------|
| POST   | `/reservation`              | Cria uma nova reserva                          |
| GET    | `/reservation/user/:userID` | Busca reservas feitas por um usuário           |
| DELETE | `/reservation/:isbn`        | Cancela uma reserva pelo ISBN do livro         |


