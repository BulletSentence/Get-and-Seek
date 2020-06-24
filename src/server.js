const express = require("express")
const server = express()

// paths
server.use(express.static("public"))

// modulos
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// HOME
server.get("/", (req, res) => {
    res.sendfile(__dirname + "/views/index.html")
})

server.get("/account", (req, res) => {
    res.sendfile(__dirname + "/views/account.html")
})

server.get("/search-results", (req, res) => {
    res.sendfile(__dirname + "/views/search-results.html")
})

// Server turn on
server.listen(3000)
