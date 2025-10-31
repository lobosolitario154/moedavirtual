const express = require('express');
const cors = require('cors');
const app = express();
const transactions = require('./routes/transactions');

app.use(cors());
app.use(express.json());
app.use('/api/transactions', transactions);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
