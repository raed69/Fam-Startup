const bcrypt = require('bcrypt');
const { generateToken } = require('../config/Jwt'); // Assuming generateToken is correctly implemented
const User = require('../models/User');
const SendEmailFunction = require('../functions/resetpassword/sendemaill');

const Register_data = async (req, res, next) => {
    const { name, lastname, email, password, phone } = req.body;
    try {
      
        const existingUser = await User.findOne({ where: { email: email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

  
        const newUser = await User.create({
            name,
            lastname,
            email,
            password: hashedPassword, 
            phone
        });

        
        const token = generateToken(newUser);

       
        return res.status(201).json({ token ,newUser});
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

///////////Logindata////////////
const Login_data = async (req, res) => {
    const { email, password } = req.body;
    try {
       
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

       
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

      
        const token = generateToken(user);

        
        return res.status(200).json({ token, user });
    } catch (error) {
        console.error('Error logging in user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

////////////////resetpassword///////////////////
const Reset_password = async (req, res, next) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        
        const resetToken = generateToken({ userId: user.id }, '1h'); // Token mta3 sa3a

        // Send the reset token to the user's email
        await SendEmailFunction(email, 'Password Reset', `Use this link to reset your password: ${resetToken}`);

        return res.status(200).json({ message: 'Reset token sent to your email' });
    } catch (error) {
        console.error('Error resetting password:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
module.exports = { Register_data,Login_data ,Reset_password};
