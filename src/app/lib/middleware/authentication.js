const jwt = require('jsonwebtoken');
const { errorLogger } = require('../middleware/logger');

const verifyToken = async (req, res, next) => {
  const authorization = req.headers['authorization'];
  
  if(typeof authorization === 'undefined') {
    errorLogger('Authorization undefined');
    return res.sendStatus(403);
  }

  const bearer = authorization.split(' ');

  if(bearer[0] !== 'bearer') {
    errorLogger('Missing bearer');
    return res.sendStatus(403);
  }

  try {
    jwt.verify(bearer[1], process.env.TOKEN_SECRET);
    const token = jwt.decode(bearer[1], process.env.TOKEN_SECRET);
    console.log(`\n\n\n token : ${JSON.stringify(token)} \n\n\n`);
    
  } catch (error) {
    errorLogger(error);

    if(error) {
      return res.sendStatus(401);
    }

    return res.sendStatus(403);
  }

  next()
}

module.exports = {
  verifyToken,
}