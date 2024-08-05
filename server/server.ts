const spotify = require("./routes/spotify")
const github = require("./routes/github")
const express = require("express")
const app = express()

const port = 3000

app.use(express.json())

app.use("/api/spotify", spotify)
app.use("/api/github", github)
