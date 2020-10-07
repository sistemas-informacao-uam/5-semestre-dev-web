function showInfo() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const nasc = document.getElementById('datanasc').value;
    const footer = document.getElementById('rodape');

    footer.innerHTML = `<h2>Dados:</h2>`
        + `<h3>${name}</h3>`
        + `<h3>${email}</h3>`
        + `<h3>${nasc}</h3>`
}