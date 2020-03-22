// const express = require('express');
const mongoose=require('mongoose');
// const router=express.Router();
const User=mongoose.model('User');


exports.addUser=(req,res)=>{
    res.render("add",{title:"AddUser"});
}
exports.addUserpost=(req,res)=>{
    var user=new User();
    user.name=req.body.name;
    user.age=req.body.age;
    user.city=req.body.city;
    user.state=req.body.state;
    user.email=req.body.email;
    user.save((err,doc)=>
    {
        if(!err){
            res.redirect("users")
        }
        else{
            res.send("error occured");
        }
    });
    
}




