// const express = require('express');
const mongoose=require('mongoose');
// const router=express.Router();
const User=mongoose.model('User');

exports.homePage=(req,res)=>{
    res.send("Hi");
}

exports.addUser=(req,res)=>{
    res.render("editUser",{title:"AddUser"});
}
exports.createUser=async (req,res)=>{
    var user=new User(req.body);
    await user.save();
    res.redirect('/')
};
exports.getUsers=async (req,res)=>{
    const users=await User.find();
    res.render('users',{title:'Users',users});
}

exports.editUser=async(req,res)=>{
    const user=await User.findOne({email:req.params.email});
    res.render('editUser',{title:`Edit ${user.email}`,user});
}
