const express = require("express")
const db = require("../data/db")
const users = require("./user-models")

const router = express.Router()

router.post("/",(req,res) =>{
    const newPost = db.insert(req.body)
    res.json(newPost)
})


router.get("/", (req,res) => {
    res.json(db.find())
})

router.post("/:id/comments", (req,res) => {
    const {id} = req.params.id
    res.json(db.insertComment(req.body))
})

router.get("/:id", (req,res) =>{
    res.json(db.findById(req.params.id))
})

router.get("/:id/comments", (req,res) =>{
    res.json(db.findCommentById(req.params.id))
})

router
module.exports = router