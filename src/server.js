const express = require("express")
const server = express()

// paths

// HOME
server.get("/", (req, res) => {
    res.sendfile(__dirname + "/views/index.html")
})


// Server turn on
server.listen(3000)
