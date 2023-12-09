const dados = require('../bancoDeDados/bancoDeDados')
let { identificadorlivros } = require('../bancoDeDados/bancoDeDados')

const listagemDeLivros = (req, res) => {
    return res.json(dados)
}

const livroEspecifico = (req, res) => {
    const { id } = req.params;

    if (id < 0 || isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    }

    const verificacaoDeLivros = dados.livros.find((livro) => {
        return livro.id === Number(id);
    });

    if (!verificacaoDeLivros) {
        return res.status(404).json({ mensagem: "Não existe livro para o ID informado." });
    }

    return res.json(verificacaoDeLivros);
}

const addLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body
    const id = identificadorlivros


    if (!titulo || !autor || !ano || !numPaginas) {
        res.status(400).json({ mensagem: `todos os dados não foram passados corretamente` })
    }

    const verificarLivros = dados.livros.find((livro) => {
        return livro.titulo === titulo && livro.autor === autor
    })

    if (verificarLivros) {
        return res.status(400).json({ mensagem: ` o livro já existe` })
    }

    const livroAdd = {
        id,
        titulo,
        autor,
        ano,
        numPaginas
    }
    dados.livros.push(livroAdd)
    return res.status(201).json({ mensagem: `livro adicionado` })
}

const livroSubstituido = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body


    if (id < 0 || isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    if (!titulo || !autor || !ano || !numPaginas) {
        res.status(400).json({ mensagem: `todos os dados não foram passados corretamente` })
    }

    const livro = dados.livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!dados.livros) {
        return res.status(404).json({ mensagem: `Não existe livro a ser substituído para o ID informado.` })
    }


    livro.titulo = titulo
    livro.autor = autor
    livro.ano = ano
    livro.numPaginas = numPaginas
    res.json({ mensagem: `livro substituido` })
}

const alterarndoUmLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    if (id < 0 || isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }
    const livro = dados.livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!livro) {
        return res.status(404).json({ mensagem: `Não existe livro a ser substituído para o ID informado.` })
    }
    if (titulo) {
        livro.titulo = titulo
    }
    if (autor) {
        livro.autor = autor
    }
    if (ano) {
        livro.ano = ano
    }
    if (numPaginas) {
        livro.numPaginas = numPaginas
    }

    return res.json({ mensagem: `livro alterado`, livro })
}

const deleteLivro = (req, res) => {
    const { id } = req.params

    if (id < 0 || isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }
    const livro = dados.livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!livro) {
        return res.status(404).json({ mensagem: `Não existe livro a ser substituído para o ID informado.` })
    }

    const livrosFiltrados = dados.livros.filter((livro) => {
        return livro.id !== Number(id)
    })
    dados.livros = livrosFiltrados
    res.json(livrosFiltrados)
}




module.exports = {
    listagemDeLivros,
    livroEspecifico,
    addLivro,
    livroSubstituido,
    alterarndoUmLivro,
    deleteLivro
}