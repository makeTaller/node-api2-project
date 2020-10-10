const express = require("express")

const db = require("./resource")
const users = require("./Users/user-models")
const usersRouter = require("./Users/user-router")

const router = express.Router()
const server = express()

server.use(express.json())

router.use( "/api/posts", usersRouter )

server.get("/", (req,res) => {
    res.json({ message: "Hello, World" })
})

server.get("/users/:id", (req,res) => {

    const id = req.params.id
    const users = db.getUsers(id)

    if (user){ 
        res.json(users)
    } else { 
        res.status(404).json({
            message: " This user doent exist",
        })
    }
})
// step 1
server.post("/api/users",(req,res) =>{
    const newUser = db.createUser({
        name: req.body.name
    })
    res.json()
})
// step 2
server.get("/api/users", (req, res) => {
    const id = req.params.id
    const users = db.getUsers(id)

    res.json(users)
})

// step 3
server.get("/api/users/:id", (req, res) => {
    res.json({})
})

// step 4 
server.delete("/api/users/:id", (req, res) => {
    //place code here
})

// step 5 
server.put("/api/users/:id", (req,res) => {
    //place code here
})

server.listen(8080, () => {
    console.log("server started")
})



