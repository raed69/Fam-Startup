const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

function authenticateToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token,JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Error authenticating token:', error);
    return res.status(403).json({ message: 'Invalid token' });
  }
}

module.exports = authenticateToken;
