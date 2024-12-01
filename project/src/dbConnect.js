// Carregar as variáveis de ambiente do arquivo .env
import dotenv from 'dotenv';
dotenv.config();

// Importar o MongoClient da biblioteca mongodb
import { MongoClient } from "mongodb";

// Obter a URL de conexão do MongoDB a partir da variável de ambiente
const mongoUri = process.env.MONGO_URI;

let cliente;
let documentosColecao;

async function conectar() {
  try {
    // Criar o cliente MongoClient com a URI de conexão
    cliente = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

    // Conectar ao MongoDB
    await cliente.connect();
    
    // Selecionar o banco de dados e a coleção
    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");

    console.log("Conectado ao banco de dados com sucesso!");
  } catch (erro) {
    console.error("Erro ao conectar ao MongoDB:", erro);
  }
}

// Chamar a função de conexão ao banco de dados
conectar();

// Exportar a coleção para uso em outras partes do código
export { documentosColecao };
