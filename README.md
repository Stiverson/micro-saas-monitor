# ⚡ Micro-SaaS Monitor de Disponibilidade

### Visão Geral do Projeto

Este é um micro-SaaS para monitoramento de disponibilidade de APIs e sites. A ferramenta permite que usuários registrados cadastrem URLs de serviços, e a aplicação irá periodicamente verificar o status de cada um, notificando sobre interrupções e fornecendo um painel visual do histórico de disponibilidade.

O projeto foi concebido para ser uma demonstração de habilidades full stack, utilizando uma arquitetura moderna e ferramentas de desenvolvimento de alto nível, com foco em segurança, escalabilidade e manutenibilidade.

---

### Tecnologias Utilizadas

| Camada | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Backend** | **Node.js, Express** | Ambiente de execução e framework web robusto. |
| **Backend** | **Prisma** | ORM (Object-Relational Mapper) moderno para interação com o banco de dados. |
| **Backend** | **PostgreSQL** | Banco de dados relacional para armazenamento de dados de usuários e monitoramentos. |
| **Backend** | **bcryptjs** | Biblioteca para hashing seguro de senhas. |
| **Backend** | **jsonwebtoken (JWT)** | Padrão de segurança para autenticação de APIs. |
| **Contêineres**| **Docker, Docker Compose** | Ferramentas para isolar e gerenciar o ambiente de desenvolvimento. |
| **Frontend** | **Vue 3** | Framework JavaScript para construção de interfaces de usuário reativas. |
| **Frontend** | **Vite** | Ferramenta de build extremamente rápida para o ambiente de desenvolvimento. |
| **Frontend** | **Pinia** | O gerenciador de estado oficial do Vue 3. |
| **Frontend** | **Vue Router** | Biblioteca de roteamento para gerenciar a navegação da aplicação. |
| **Frontend** | **Tailwind CSS** | Framework CSS utilitário para design rápido e responsivo. |
| **Frontend** | **Axios** | Cliente HTTP para consumir as APIs do backend. |

---

### Funcionalidades Implementadas (WIP)

* **Registro de Usuário:** Criação de novos usuários com hashing de senha seguro.
* **Autenticação de Usuário:** Sistema de login que gera um JWT para sessões seguras.
* **Rotas de Autenticação:** Implementação dos endpoints de `POST /auth/register` e `POST /auth/login`.
* **Infraestrutura Docker:** Ambiente completo para rodar a aplicação e o banco de dados em contêineres.
* **Estrutura do Frontend:** Setup com Vue 3, Vite, Pinia, Tailwind CSS e rotas de placeholder.
* **Dark/Light Mode:** Funcionalidade de alternância de tema na interface do usuário.

---

### Como Rodar o Projeto

Para configurar e executar a aplicação, certifique-se de ter o Docker Desktop instalado e siga as instruções abaixo.

#### 1. Clonar o Repositório

```bash
git clone [https://github.com/Stiverson/micro-saas-monitor.git](https://github.com/Stiverson/micro-saas-monitor.git)
cd micro-saas-monitor

2. Configurar o Backend com Docker
Este comando irá construir as imagens Docker e iniciar os serviços de banco de dados (db) e backend (backend). O frontend será executado separadamente.

Bash

# Na raiz do projeto
docker compose up -d backend db
3. Configurar e Iniciar o Frontend
O frontend será executado localmente.

Bash

# Na pasta frontend
cd frontend

# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
A aplicação estará acessível em http://localhost:5173/.

Como Testar a API (Registro)
Com o backend rodando no Docker, você pode usar uma ferramenta como Postman ou Insomnia para testar o endpoint de registro.

URL: http://localhost:3000/api/v1/auth/register

Método: POST

Corpo da Requisição (Body): raw com tipo JSON

JSON

{
  "email": "teste@exemplo.com",
  "password": "SenhaSegura123!"
}
Próximos Passos
Proteção de Rotas: Adicionar autenticação JWT para proteger as rotas do backend.

Desenvolvimento do Dashboard: Implementar o painel principal, permitindo aos usuários adicionar, editar e monitorar URLs.

Lógica de Monitoramento: Criar um worker para realizar as verificações periódicas dos sites e APIs.

Autor
Stiverson