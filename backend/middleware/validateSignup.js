const { body } = require('express-validator');

const validateSignup = [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 6 characters')
];
const validateLogin = [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 6 characters')
];

module.exports = { validateSignup , validateLogin };