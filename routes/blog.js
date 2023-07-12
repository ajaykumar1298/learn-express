const express =require("express")
const route=express.Router()
const path=require("path")

route.get("/",(req,res)=>{
  // res.send("hey")
  res.sendFile(path.join(__dirname,"../templates/index.html"))
})

module.exports=route