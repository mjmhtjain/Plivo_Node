const service = require('./service');
const Joi = require('@hapi/joi');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Test API';
        }
    },
    {
        method: 'POST',
        path: '/add',
        handler: (request, h) => {

            return service.addContact(request, h);
        },
        options: {
            validate: {
                payload: {
                    name: Joi.string().min(1).max(140).required(),
                    email: Joi.string().email({ minDomainSegments: 2 }).required(),
                    phNumber: Joi.string().length(10).required(),
                    _id: Joi.string().optional()
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/edit',
        handler: (request, h) => {

            return 'Hello World!';
        }
    },
    {
        method: 'GET',
        path: '/delete',
        handler: (request, h) => {

            return 'Hello World!';
        }
    },
    {
        method: 'GET',
        path: '/searchByName',
        handler: (request, h) => {

            return 'Hello World!';
        }
    },
    {
        method: 'GET',
        path: '/searchByEmail',
        handler: (request, h) => {

            return service.findContactByEmail(request, h);
        }
    }
];

module.exports = routes;