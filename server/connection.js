const express = require("express")
const app = express()
const port = 3000

const products = require("./twitch-stickers.json")
const parser = require("body-parser")
const cors = require("cors")

const inventoryRouter = require("../src/routes/inventory")

// app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
app.use(cors())

// app.use("/gifs", gifRouter);
app.get("/", (req, res) => {
  // res.send("get success")
  res.json(products)
})

app.listen(port, () => console.log("Listening on port: " + port))
