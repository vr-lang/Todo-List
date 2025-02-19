const express =  require("express")
const cors=require("cors")
const { v4: uuidv4 } = require('uuid');
const app = express()



let db=[

]


app.get("/",(req,res) =>{
    res.send("Hello world")
})

app.use(cors())
app.use(express.json())

app.post("/", (req,res) =>{
    const {title,description} = req.body
    db.push({title,description,ID:uuidv4()})
    res.json(db)
})


app.delete("/delete/:id",(req,res) =>{
const{id} = req.params

let filteredarray=db.filter((item) =>{
    return !item.ID.includes(id)
})

db=filteredarray
res.json(db)
})



app.listen(8080,() =>{
    console.log("server connected to port 8080");
    
})

