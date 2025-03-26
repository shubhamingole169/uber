const { validationResult } = require('express-validator');
const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const jwt = require('jsonwebtoken'); // Assuming you'll use this for token generation

module.exports.registerCaptain = async (req, res, next) => {
    try {
        // Validate request body using express-validator
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fullname, email, password, vehicle } = req.body;

        console.log(req.body)

        // Check if required nested fields are present
        if (!fullname?.firstname || !fullname?.lastname || !vehicle) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Check if captain already exists
        const isCaptainAlreadyExist = await captainModel.findOne({ email });
        if (isCaptainAlreadyExist) {
            return res.status(400).json({ message: 'Captain already exists!' });
        }

        // Hash the password
        const hashedPassword = await captainModel.hashPassword(password);

        // Create captain using the service
        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });

        // Generate a JWT token
        const token = jwt.sign(
            { id: captain._id, email: captain.email },
            process.env.JWT_SECRET,
            { expiresIn: '1' }
        );

        // Respond with the newly created captain and token
        res.status(200).json({ token, captain });
    } catch (err) {
        console.error(err);
        next(err);
    }
};
