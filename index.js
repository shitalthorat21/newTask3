const express = require('express');
const mongoose=require('mongoose');
const router = express.Router();
const userController=require('./userController');
const User=mongoose.model('User');

router.get('/add', userController.addUser);
router.post('/add', userController.addUserpost);

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



module.exports = router;





