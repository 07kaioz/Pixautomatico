let saldo = 0.01;

document.getElementById('pixForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const chave = document.getElementById('chave').value;
  const valor = parseFloat(document.getElementById('valor').value);

  if (valor > saldo) {
    document.getElementById('resposta').innerText =
      'Erro: Saldo insuficiente para enviar esse valor.';
    return;
  }

  saldo -= valor;
  document.getElementById('saldo').innerText = `R$ ${saldo.toFixed(2)}`;
  document.getElementById('resposta').innerText =
    `Pix de R$ ${valor.toFixed(2)} enviado para: ${chave}`;
});
