const routes = require("./routes/routes")
const express = require("express")
const app = express()

const port = 3000

app.use(express.json())
app.use("/api", routes)
