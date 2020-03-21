const express = require('express');
// const mongoose=require('mongoose');
const router=express.Router();
// const User=mongoose.model('User');
// let userData=[];

router.get('/',(req,res)=>{
    res.json("Simple text");
})
module.exports=router;