# CRUD de Usuário com Perfil - Express

Para informações detalhadas sobre rotas, arquitetura e dados exatos de cada endpoint da API, consulte a **documentação em PDF** fornecida junto com o link deste repositório.

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (v18.x ou superior)
* [MySQL](https://dev.mysql.com/downloads/installer/) (rodando localmente, geralmente na porta 3306)
* [Postman](https://www.postman.com/downloads/) ou Insomnia (para testar as requisições da API)
* Git

## 🚀 Como rodar o projeto localmente

Siga o passo a passo abaixo para executar a aplicação e testá-la:

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
Crie um arquivo chamado `.env` na raiz do projeto e adicione a string de conexão com o seu banco de dados MySQL local. Exemplo:

```env
DATABASE_URL="mysql://root:root@localhost:3306/db_api_2026"
```
*(Lembre-se de substituir `root:root` pelo seu usuário e senha reais do MySQL, caso sejam diferentes).*

### 4. Sincronize o Banco de Dados
Execute o comando do Prisma para sincronizar os modelos e criar as tabelas no banco de dados:

```bash
npx prisma migrate dev
```

### 5. Inicie o Servidor
Para rodar a API em modo de desenvolvimento (com auto-reload), execute:

```bash
npm run dev
```
*Após rodar o comando, o terminal deverá exibir a mensagem: `Servidor rodando na porta 3001 🚀`*

---

## 🧪 Como testar a API no Postman

Com o servidor rodando no seu terminal, abra o aplicativo do **Postman** para simular o front-end e testar as rotas:

1. Clique em **New** > **HTTP Request**.
2. Na barra de endereço, digite a URL base da API: `http://localhost:3001/api/usuarios` (adicione `/ID_AQUI` no final para rotas específicas de um usuário).
3. No botão dropdown ao lado da URL, escolha o **Método HTTP** correspondente (`GET`, `POST`, `PUT` ou `DELETE`).
4. **Para rotas de Criação (`POST`) e Atualização (`PUT`):**
   * Logo abaixo da URL, clique na aba **Body**.
   * Selecione a opção **raw**.
   * No menu dropdown que aparecer (geralmente escrito *Text*), mude para **JSON**.
   * Escreva o objeto JSON com os dados do usuário (conforme especificado no PDF de documentação).
5. Clique no botão azul **Send** para enviar a requisição e veja a resposta do banco de dados na parte inferior da tela.
