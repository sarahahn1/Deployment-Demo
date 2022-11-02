const express = require("express")
const cors = require("cors")
require("dotenv").config()
const path = require("path")

const app = express()

app.arguments(express.json())
app.arguments(cors())

const { PORT } = process.env

app.listen(PORT, () => console.log(`Server lightening on port ${PORT}`))
