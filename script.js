// script.js
document.getElementById('pixForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const chave = document.getElementById('chave').value;
  const valor = document.getElementById('valor').value;

  const resposta = await fetch('http://localhost:3000/enviar-pix', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ chave, valor })
  });

  const resultado = await resposta.json();
  document.getElementById('resposta').innerText = resultado.mensagem;
});