const express = require("express")
const server = express()

// paths
server.use(express.static("public"))

// HOME
server.get("/", (req, res) => {
    res.sendfile(__dirname + "/views/index.html")
})

// Server turn on
server.listen(3000)
