const joi = require("joi");

const sanitizeForm = (req, res, next) => {
    
    const body = req.body;

    for (let key in body) {

        if (typeof body[key] === "string") {
            body[key] = body[key].replace(/\s\s+/g, " "); // replace double spaces with single space
            body[key] = body[key].trim();
        }
    }

    return next();
}


const userSchema = joi.object({
    userName: joi.string().regex(/^[a-z A-Z]+$/).min(2).required()
        .error(() => "Invalid Name!"),
    phone: joi.string().regex(/^[0-9]+$/).min(11).max(11).required()
        .error(() => "Invalid phone number!"),
    email: joi.string().email().required()
        .error(() => "Invalid Email!"),
    password: joi.string().regex(/^(?=.*[!@#$%^&*])[a-z A-Z 0-9 !@#$%^&*]+$/).min(8).max(12).required()
        .error(() => "Invalid Password! Password must have 8 characters and at least 1 special character")
});

const updateSchema = joi.object({
    userName: joi.string().regex(/^[a-z A-Z]+$/).min(2)
        .error(() => "Invalid Name!"),
    phone: joi.string().regex(/^[0-9]+$/).min(11).max(11)
        .error(() => "Invalid phone number!"),
    email: joi.string().email()
        .error(() => "Invalid Email!")
});

const validateUpdate = (req, res, next) => {

    const userFormData = req.body;

    const isValid = joi.validate(userFormData, updateSchema);

    if (isValid.error) { 

        return res.status(400).json({
            msg: isValid.error.details[0].message
        });

    } else {
        return next();
    }
}


const validateForm = (req, res, next) => {

    const userFormData = req.body;

    const isValid = joi.validate(userFormData, userSchema);

    if (isValid.error) { 

        return res.status(400).json({
            msg: isValid.error.details[0].message
        });

    } else {
        return next();
    }
}


module.exports = {
    sanitizeForm,
    validateForm,
    validateUpdate
}