exports.paginaInicial = (req, res) => {
    res.send(`
    <h1>CONTATO</h1>
    <form action="/" method="post">
        <input type="text" name='nome'>
        <button type='submit'>Enviar</button>
    </form>`);
};