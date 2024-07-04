const { Register_data, Login_data, Reset_password } = require('../controllers/Auth')

const router=require('express').Router()

router.post('/register',Register_data);
router.post('/login',Login_data);
router.post('/resetpassword',Reset_password)

module.exports=router