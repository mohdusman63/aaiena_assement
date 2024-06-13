const { body, validationResult } = require('express-validator');



const registerValidationRules = () => {
    return [
        body('name').exists().notEmpty().trim().withMessage('name type is required.'),
        body('email').exists().notEmpty().trim().withMessage('email  is required.'),
        body('password').exists().notEmpty().trim().withMessage('password type is required.'),


    ];
};

const loginValidationRules = () => {
    return [
        body('email').exists().notEmpty().trim().withMessage('email type is required.'),
        body('password').exists().notEmpty().trim().withMessage('password type is required.'),


    ];
}

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }


    return res.status(422).json({
        message: 'enter required field',
        errors: errors.array(),
    });



};

module.exports = {
    loginValidationRules,
    registerValidationRules,
    validate,

};
