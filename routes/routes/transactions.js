const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Zer', balance: 1000 },
  { id: 2, name: 'Mix', balance: 500 }
];

router.post('/send', (req, res) => {
  const { fromId, toId, amount } = req.body;
  const sender = users.find(u => u.id === fromId);
  const receiver = users.find(u => u.id === toId);

  if (sender.balance >= amount) {
    sender.balance -= amount;
    receiver.balance += amount;
    res.json({ success: true, sender, receiver });
  } else {
    res.status(400).json({ error: 'Saldo insuficiente' });
  }
});

router.get('/users', (req, res) => {
  res.json(users);
});

module.exports = router;
