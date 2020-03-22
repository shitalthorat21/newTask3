const express = require('express');
const router = express.Router();
const userController=require('./userController');


router.get('/add', userController.addUser);
router.post('/add', userController.addUserpost);



module.exports = router;





