const express = require("express")
const cors = require("cors")

const matchRoute = require("./routes/matchRoute")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", matchRoute)

// Export the app for Vercel
module.exports = app