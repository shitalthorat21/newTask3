const express = require('express');
const mongoose=require('mongoose');
const router = express.Router();
const userController=require('./userController');
const User=mongoose.model('User');

//add user page
router.get('/add', userController.addUser);
router.post("/add",userController.addUserpost);



router.post('/add', (req,res)=>{
    if(req.body.email)
    {
        addUserpost(req,res);
    }
    else
    {
        updateUserpost(req,res);
    }
});

//fetch data from databse
router.get('/users', (req,res)=>{
    User.find((err,docs)=>{
        if(!err){
            res.render("users",{
                users:docs
            });
        }
        else{
            console.log("Error in users");
        }
    });
});

//edit operation
router.get("/:email", (req,res)=>
{
    User.findOne(req.params.email,(err,doc)=>{
        if(!err){
            res.render("/add",({viewTitle:"Update User",users:doc}))
        }
    })
    
});

//delete operation
router.delete("/delete/:email", (req,res,next)=>
{
    User.remove({email:req.params.email},(err,doc)=>{
        if(!err){
            res.render("users");
        }
        else{
            console.log("Error during delete");
        }
    })
    
});


//update function
function updateUserpost(req,res)
{
    User.findOneAndUpdate({email:req.body.email}, req.body,{new:true},(err,doc)=>
    {
        if(!err){
            res.redirect("users");
        }
        else{
            console.log("error occured in updating")
        }
    })
}


module.exports = router;





