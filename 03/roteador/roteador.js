const express = require('express')
const rotas = express();

const { listagemDeLivros, livroEspecifico, addLivro, livroSubstituido, alterarndoUmLivro, deleteLivro } = require('../src/controladores/controladores')



rotas.get('/livros', listagemDeLivros)
rotas.get('/:id', livroEspecifico)
rotas.post('/livros', addLivro)
rotas.put('/livros/:id', livroSubstituido)
rotas.patch('/livros/:id', alterarndoUmLivro)
rotas.delete('/livros/:id', deleteLivro)



module.exports = rotas;