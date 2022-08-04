const jwt = require('jsonwebtoken');
const { createError } = require('../errors/error');

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) return next(createError(401, "You are not authenticated.", "Error Token"));

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403, "Token is not valid", "Error Token"));
        req.user = user;
        next();
    });
}