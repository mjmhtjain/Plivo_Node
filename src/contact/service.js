const mongo = require('../db');
const dao = require('./dao');
const { Response, ErrorResponse } = require('../common');

const addContact = (req, res) => {
    let responseObj = undefined;

    return dao.findContactByEmail(req.payload.email)
        .then(result => {

            if (result && result.length > 0) {
                responseObj = new ErrorResponse(new Error(), "Email already exists!!");
                return res.response(responseObj);
            }

            return dao.addContact(req.payload)
                .then(result => {
                    responseObj = new Response(result.ops)
                    return res.response(responseObj);
                })

        })
        .catch(err => {
            let message = `Encountered some error : ${err}`;
            console.log(message);
            return message;
        })

}

const findContactByEmail = (req, res) => {

    return dao.findContactByEmail()
        .then(result => {
            const responseObj = new Response(result.ops)
            return res.response(responseObj);
        })
        .catch(err => {
            let message = `Encountered some error : ${err}`;
            console.log(message);
            return message;
        })
}

module.exports = {
    addContact,
    findContactByEmail
}