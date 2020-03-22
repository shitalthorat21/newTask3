// const express = require('express');
const mongoose=require('mongoose');
// const router=express.Router();
const User=mongoose.model('User');


exports.addUser=(req,res)=>{
    res.render("add",{title:"AddUser"});
}
exports.addUserpost=(req,res)=>{
    console.log("Hi");
}




