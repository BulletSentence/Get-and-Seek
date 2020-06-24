const express = require("express")
const server = express()

// paths

// HOME
server.get("/", (req, res) => {
    req.send("Hi ppl")
})


// Server turn on
server.listen(3000)
