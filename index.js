const express = require('express');
const mongoose=require('mongoose');
const router = express.Router();
const userController=require('./userController');
const User=mongoose.model('User');
const {catchErrors}=require('./errorHandlers');
//add user page
router.get('/', catchErrors(userController.getUsers));
router.get('/users', catchErrors(userController.getUsers));
router.get('/add', userController.addUser);
router.post('/add', catchErrors(userController.createUser));
router.post('/add/:email', catchErrors(userController.updateUser));
router.get('/users/:email/edit',catchErrors(userController.editUser));
router.get('/users/:email/delete',userController.deleteUser);



// //delete operation
// router.delete("/delete/:email", (req,res,next)=>
// {
//     User.remove({email:req.params.email},(err,doc)=>{
//         if(!err){
//             res.render("users");
//         }
//         else{
//             console.log("Error during delete");
//         }
//     })
    
// });




module.exports = router;





