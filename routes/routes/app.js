document.getElementById('transferForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const fromId = parseInt(document.getElementById('fromId').value);
  const toId = parseInt(document.getElementById('toId').value);
  const amount = parseFloat(document.getElementById('amount').value);

  const res = await fetch('http://localhost:3000/api/transactions/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fromId, toId, amount })
  });

  const data = await res.json();
  document.getElementById('result').innerText = JSON.stringify(data, null, 2);
});
