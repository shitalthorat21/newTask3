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

router.put("users/:id", (req,res,next)=>
{
    User.findOneAndUpdate({email:req.params.email}, 
        {
            $set:{
            name:req.body.name,
            age:req.body.age,
            city:req.body.city,
          state:req.body.state
    
            }
        },
            (err,result)=>
            {
                if(err)
                {
                    res.json(result);
                }
                else
                {
                    res.json({msg:"Updated"});
                }
            });
    
});

router.delete('/:email', function(req, res) {
	console.log(req.params.email);
	let email = req.params.email;
	User.remove({email:email}, function(err,doc){	
	
		if (!err)
			res.redirect("users");
		else
            res.send('Error');
    	
	});
});



module.exports = router;





