import express from "express";
const app = express()

app.use(express.json())

const port = 3000
let items = []

app.get("/items", (req, res) => {
    res.json(items)
})

app.post("/items", (req, res) => {
    const { id, name } = req.body
    const newItem = { id, name }
    items.push(newItem)
    res.status(200).json(items)
})

app.listen(port, () => {
    console.log("Server is runing");

})

app.put("/items/:id", (req, res) => {
    const id = parseInt(req.params.id, 10)
    const { name } = req.body
    if (!id) {
        res.status(404).json("id not find")
    }

    if (!name) {
        res.status(404).json("name not find")
    }

    const item = items.find(item => item.id === id)
    item.name = name
    res.json(item)
})