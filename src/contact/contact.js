 const Joi = require('@hapi/joi');

const contactSchema = {
    name: Joi.string().min(1).max(140).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    phNumber: Joi.string().length(10).required(),
    _id: Joi.string().optional()
}

module.exports = {
    contactSchema
}