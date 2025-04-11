const express = require("express")
const app = express()
const port = 3000

app.get("/api", (req, res) => {
    res.send("helloWorld")
})

app.listen(port, console.log(`This listen to port ${port}`))