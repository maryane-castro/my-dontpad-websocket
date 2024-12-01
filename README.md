
---

# My Dontpad WebSocket

Este projeto implementa uma aplicação web utilizando WebSockets para permitir a edição de documentos em tempo real.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
.
├── docs                  # Documentação e imagens
│   ├── assets            # Imagens utilizadas na documentação
│   ├── docs              # Documentos de especificação
├── LICENSE               # Arquivo de licença
├── project               # Código-fonte do projeto
│   ├── package.json      # Dependências e scripts do projeto
│   ├── package-lock.json # Gerenciador de pacotes
│   ├── public            # Arquivos públicos (front-end)
│   │   ├── documento.html
│   │   ├── documento.js
│   │   ├── index.html
│   │   ├── index.js
│   │   ├── socket-front-documento.js
│   │   └── socket-front-index.js
│   └── src               # Arquivos fontes (back-end)
│       ├── dbConnect.js  # Conexão com banco de dados
│       ├── documentosDb.js # Lógica para manipulação de documentos no banco
│       ├── servidor.js   # Servidor principal (Express)
│       └── socket-back.js # Lógica para WebSocket
└── README.md             # Este arquivo
```

## Tecnologias Utilizadas

- **WebSockets**: Comunicação em tempo real entre o servidor e o cliente.
- **Node.js**: Ambiente de execução JavaScript para o servidor.
- **Express.js**: Framework para facilitar a criação do servidor.
- **MongoDB**: Banco de dados NoSQL para armazenar documentos.
- **Socket.io**: Biblioteca para comunicação WebSocket.

## Instruções de Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- MongoDB (ou acesso a um banco de dados MongoDB remoto)

### Passo 1: Clonar o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/my-dontpad-websocket.git
cd my-dontpad-websocket
```

### Passo 2: Instalar as Dependências

Dentro da pasta do projeto, instale as dependências usando o `npm`:

```bash
npm install
```

### Passo 3: Configurar Banco de Dados

Crie uma conexão com o banco de dados MongoDB. Modifique as configurações de conexão no arquivo `src/dbConnect.js`.

### Passo 4: Executar o Servidor

Para rodar o servidor, execute o comando:

```bash
npm start
```

O servidor estará rodando localmente em `http://localhost:3000`.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

