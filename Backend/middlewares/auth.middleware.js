const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklist.model');

const getTokenFromRequest = (req) => {
    // console.log(req.cookies.token)
    // console.log(req.headers.authorization.split(' ')[1])
    return req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
};

const isTokenBlacklisted = async (token) => {
    // return await blackListTokenModel.findOne({ token: token });
    const a = await blackListTokenModel.findOne({token});
    console.log("A" ,a);
    return a;
};



// User Authentication Middleware
module.exports.authUser = async (req, res, next) => {
    const token = getTokenFromRequest(req);

    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const isBlacklisted = await isTokenBlacklisted(token);
    if (isBlacklisted) {
        return res.status(401).json({ success: false, message: 'Unauthorized (Token Blacklisted)' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        if (!user) {
            return res.status(401).json({ success: false, message: 'Unauthorized (User Not Found)' });
        }

        req.user = user;
        return next();
    } catch (error) {
        console.error('Error in authUser:', error.message);
        return res.status(401).json({ success: false, message: 'Unauthorized (Invalid Token)' });
    }
};

// Captain Authentication Middleware
module.exports.authCaptain = async (req, res, next) => {
    const token = getTokenFromRequest(req);
    

    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized ' });
    }

    const isBlacklisted = await isTokenBlacklisted(token);
    console.log("balcklisted", isBlacklisted)

    if (isBlacklisted) {
        return res.status(401).json({ success: false, message: 'Unauthorized (Token Blacklisted)' });
    }

    

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        if (!captain) {
            return res.status(401).json({ success: false, message: 'Unauthorized (Captain Not Found)' });
        }

        req.captain = captain;
        return next();
    } catch (error) {
        console.error('Error in authCaptain:', error.message);
        return res.status(401).json({ success: false, message: 'Unauthorized (Invalid Token)' });
    }
};
