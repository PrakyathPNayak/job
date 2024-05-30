const express=require("express")
const rout=express.Router()
const controller=require("../controller/controller")
rout.post("/identify",controller.get)


module.exports={rout}