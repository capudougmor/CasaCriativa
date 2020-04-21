//express para configurar o servidor
const express = require('express')
const server = express()

//configuar arquivos estaticos(css, scripts, imagens)
server.use(express.static("./ws/public")) // vira uma pasta raiz

//configurando o nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure("./ws/views", {
  express: server,
  noCache: true,  // para nao fazer cache usado para desenvolvimento
})

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de Programação",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet",
    url: "http://rocketseat.com"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de Programação",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet",
    url: "http://rocketseat.com"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de Programação",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet",
    url: "http://rocketseat.com"
  },

  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Curso de Programação",
    category: "Estudo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet",
    url: "http://rocketseat.com"
  }
]

//criacao da a rota /
server.get('/', function(req, res){

  const reversedIdeas = [...ideas].reverse()

  let lastIdeas = []
  for(idea of reversedIdeas) {
    if(lastIdeas.length < 2) {
      lastIdeas.push(idea)
    }
  }

  return res.render("index.html", { ideas: lastIdeas })
})

server.get('/ideias', function(req, res){

  const reversedIdeas = [...ideas].reverse()

  return res.render("ideias.html", { ideas: reversedIdeas })
})


//liguei o servidor na porta 3000
server.listen(3000, () => {
  console.log('conectado')
})