const express = require('express');
const bodyParser = require('body-parser');
const { Connection, PublicKey, clusterApiUrl } = require('@solana/web3.js');

const app = express();
const port = 3003;

// Configurar Body Parser
app.use(bodyParser.json());

// Configurar Conexão com a Solana
const connection = new Connection(clusterApiUrl('devnet'));

app.get('/', (req, res) => {
    res.send('Solana Api Started!!');
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
