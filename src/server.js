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
    return res.render("index.html",  {title:"Your Place to Seek Things"})
})

server.get("/account", (req, res) => {
    return res.render("account.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})

// Server turn on
server.listen(3000)

// 01:20:17