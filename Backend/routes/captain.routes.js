const captainController = require('../controllers/captaine.controller')
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3}).withMessage('Firstname must be least 3 character long'),
    body('password').isLength({min: 6}).withMessage('Password must be length at least 6 character !!!'),
    body('vehicle.color').isLength({min: 3}).withMessage('color must be at least 3 character !!!'),
    body('vehicle.plate').isLength({min: 3}).withMessage('plate must be at least 3 character !!!'),
    // body('vehicle.capacity').isLength({min: 3}).withMessage('plate must be at least 3 character !!!'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number and at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type!!! ')
],
captainController.registerCaptain  )


module.exports = router;