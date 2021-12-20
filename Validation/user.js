const joi = require("joi");

const schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string(),
    email: joi.string().email().required(),
    age: joi.number().integer().required()
})

//we will use this as our middleware for user validation

exports.userValidation = async (req, res, next) => {
    const is_passed = await schema.validate(req.body);
    if (is_passed.error) {
        return res.status(400).json({ status: 0, message: is_passed.error.details[0].message });
    }
    else {
        next()
    }
}