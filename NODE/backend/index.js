import express from "express";
const app = express()

app.use(express.json())

const port = 3000
let items = []

app.get("/items",(req,res)=>{
    res.json(items)
})

app.post("/items",(req,res)=>{
    const {id,name} = req.body
    const newItem = {id,name}
    items.push(newItem)
    res.status(200).json(items)
})

app.listen(port,()=>{
    console.log("Server is runing");
    
})