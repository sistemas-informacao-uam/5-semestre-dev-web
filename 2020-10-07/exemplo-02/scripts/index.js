function enviarDados() {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#mail').value;
  const nasc = document.querySelector('#datanasc').value;
  const rodape = document.querySelector('#rodape');

  rodape.innerHTML = `<h3>Dados enviados</h3>` + `<p>${name}</p>` + `<p>${email}</p>` + `<p>${nasc}</p>`;
}