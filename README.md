# CRUD de Usuário com Perfil - Express

Uma API RESTful construída com Node.js e Express, utilizando o Prisma ORM para o gerenciamento de um banco de dados MySQL. Este sistema implementa um CRUD completo de usuários, incluindo um relacionamento 1:1 com uma tabela de perfis (criados automaticamente junto com o usuário via *Nested Writes*).

## 🛠️ Tecnologias, Versões e Dependências

As principais ferramentas e versões utilizadas no desenvolvimento deste projeto foram:

* **Linguagem:** Node.js (Recomendado `v18.x` ou superior)
* **Framework Web:** Express `^5.2.1`
* **ORM:** Prisma `^7.4.1` (Prisma Client e Prisma CLI)
* **Banco de Dados:** MySQL (Driver `mysql2 ^3.18.0`)
* **Utilitários:** * `cors ^2.8.6` (Para permitir requisições de diferentes origens)
  * `nodemon ^3.1.14` (Dependência de desenvolvimento para auto-reload)

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/)
* [MySQL](https://dev.mysql.com/downloads/installer/) (rodando localmente, geralmente na porta 3306)
* Git

## 🚀 Como rodar o projeto localmente

Siga o passo a passo abaixo para executar a aplicação na sua máquina:

### 1. Clone o repositório
```bash
git clone [https://github.com/CarlosCF0503/CRUD-de-Usuario-com-Perfil---Express.git](https://github.com/CarlosCF0503/CRUD-de-Usuario-com-Perfil---Express.git)
cd CRUD-de-Usuario-com-Perfil---Express
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as Variáveis de Ambiente
Crie um arquivo chamado `.env` na raiz do projeto. Adicione a string de conexão com o seu banco de dados MySQL local. Exemplo:

```env
DATABASE_URL="mysql://root:root@localhost:3306/db_api_2026"
```
*(Substitua `root:root` pelo seu usuário e senha reais do MySQL, caso sejam diferentes).*

### 4. Sincronize o Banco de Dados (Migrations)
Execute o comando do Prisma para sincronizar o arquivo `schema.prisma` e criar as tabelas `usuario` e `perfil` no seu banco de dados:

```bash
npx prisma migrate dev
```

### 5. Inicie o Servidor
Para rodar a API em modo de desenvolvimento (o servidor reiniciará automaticamente caso você altere o código), execute:

```bash
npm run dev
```
*O terminal exibirá a mensagem: `Servidor rodando na porta 3001 🚀`*

---

## 🛣️ Rotas da API (Endpoints) e Como Testar

A API roda baseada no prefixo `/api/usuarios`. Abaixo estão as rotas disponíveis e o formato esperado para as requisições que exigem envio de dados (Body).

### Criar Usuário E Perfil
* **Método:** `POST`
* **Rota:** `/api/usuarios`
* **Body (JSON):**
```json
{
  "nome": "Carlos Cruz",
  "email": "carlos@email.com",
  "senha": "senha_segura"
}
```

### Listar Todos os Usuários
* **Método:** `GET`
* **Rota:** `/api/usuarios`
* *Retorna um array com todos os usuários e os dados de seus respectivos perfis (tabela unida).*

### Buscar Usuário por ID
* **Método:** `GET`
* **Rota:** `/api/usuarios/:id`

### Atualizar Usuário
* **Método:** `PUT`
* **Rota:** `/api/usuarios/:id`
* **Body (JSON):**
```json
{
  "nome": "Carlos Cruz Atualizado",
  "email": "novoemail@email.com"
}
```

### Deletar Usuário
* **Método:** `DELETE`
* **Rota:** `/api/usuarios/:id`
