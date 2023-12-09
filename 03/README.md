# API Blibioteca Online

## Visão geral do projeto 
Este prjeto tem o objetivo de proporcionar uma bliblioteca online. Está API é composta por 6 rotas, sendo elas de get, post, put, patch e delete, todas possuindo os padrões REST.

GET/Livros: listando todos os livros já cadastrados no arquivo 
bancoDeDados.js existente no diretorio bancoDeDados.

GET/:id: Está rota tem como função buscar um livro e suas informações em especifico a partir de seu indentificador unico.

POST/livros: Está rota é responsavel pelo cadastro e registro no banco de dados de novos livros.

PUT/livros/:id: A rota PUT possibilita a substituição de um livro a partir de seu identificador unico.

PATCH/livros/:id: A rota PATCH possibilita alterações cadastrais dos livors tambem buscados pelo seu indetificador unico.

DELETE/livros/:id: Está rota nos possibilita a exclusão de algum exemplar existente na bliboteca sendo indentifcado a partir de seu id.

# Regras da blibioteca 
1- Caso o id nao seja um numero valido ou inexistente, sera retornado uma mensagem informando o erro ao usuario. Isso valera para mais de uma rota e para suas respectvas funções. 

2- Nao será permitido livros com seus respectivos identificadores iguais. 

## Observações 
1- Seguir os padrões REST o mais fielmente possivel.

2- Garantir que todas as requiçoes tenham suas respectivas respostas auto explicativas.

## Projeto em execução 
 1- Instalar todas as depêndencias requisitadas. Sendo elas;
 
 - express
 - nodemon
 - utils-playground

 2- Criação de rotas e de suas funções especificas para cada uma.

 ## Estrutura do projeto 
1.1 Index.js: Este arquivo tem como função fazer com que todo o peojeto interaja, desde uma criação de uma instância do Express, até a ultilização das rotas determinadas, onde as mesmas já estão em interação com as funoçes e middleware`s criados para total funcionaliade do projeto.

1.2 Roteador.js: Esté arquivo e responsavel por definir os caminhos que serão percorridos pelas funcionalidades do projeto, tendo total viculo aos metodos presentes no diretorio controladores.

1.3 bancoDeDados.js: É composto por um objeto chamado 'dados', onde o mesmo ira armazenar os dados que serão requisitados nas funções, sejam elas de adcionar, alteral, exlcuir, substituir ou listar livros, a partir de cada função executada sera armazenado e atualizado o banco de dados.

1.4 Controladores.js: É responsavel por conter todas as  funcionalidades do projeto, onde cada uma das funções será solicitadas atráves das rotas.

- GET/livros
- GET/:id
- POST/livros
- PUT/livros/:id
- PATCH/livros/:id'
- DELETE/livros/:id


## Resultados

### listagem De Livros
## ![](./img/listagem%20de%20livros.png)

### Livro em especifico 
## ![](./img/livro%20especifico.png)

### Adição de livro 
## ![](./img/adição%20de%20livro.png)

### Substituição de livro 
## ![](./img/substituição%20de%20livro.png)

#### Alteração de livro 
## ![](./img/alteração%20de%20livro.png)

### Exclusão de livro 
## ![](./img/exclusão%20de%20livro.png)
