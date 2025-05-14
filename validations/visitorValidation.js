const Joi = require('joi');
const joi = require('joi');

const visitorValidation = Joi.object({
    name: Joi.string().required(),
    mobile: Joi.string().min(10).required(),
    email: Joi.string().email(),
    purpose: Joi.string().required(),
    whimToMeet: Joi.string().optional(),
    department: Joi.string().optional(),
    outTime: Joi.date().optional(),
})


module.exports = visitorValidation