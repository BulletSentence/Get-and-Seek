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
    res.render("index.html")
})

server.get("/account", (req, res) => {
    res.render("account.html")
})

server.get("/search-results", (req, res) => {
    res.render("search-results.html")
})

// Server turn on
server.listen(3000)
