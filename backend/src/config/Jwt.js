const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

function generateToken(payload) {
  const plainPayload = {
    id_user: payload.id_user,
    name: payload.name,
    lastname: payload.lastname,
    email: payload.email,
    
  };
  
  return jwt.sign(plainPayload, JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}


const generateResetToken = (userEmail) => {
  const secret = process.env.JWT_SECRET ; // Make sure to store this secret securely
  const token = jwt.sign({ email: userEmail }, secret, { expiresIn: '1h' });
  return token;
};




module.exports = { generateResetToken,generateToken, verifyToken };
