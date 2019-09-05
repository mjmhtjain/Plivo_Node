const mongo = require('../db');
const dao = require('./dao');
const { Response, ErrorResponse } = require('../common');

const addContact = async (req, res) => {
    let responseObj = undefined;

    try {
        let result = await dao.findContactByEmail(req.payload.email);

        if (result && result.length > 0) {
            responseObj = new ErrorResponse(new Error(), "Email already exists!!");
            return res.response(responseObj);
        }

        result = await dao.addContact(req.payload)
        responseObj = new Response(result.ops)
        return res.response(responseObj);
    } catch (error) {

        let message = `Encountered some error : ${err}`;
        console.log(message);
        return message;
    }


}

const findContactByEmail = async (req, res) => {
    let responseObj = undefined;

    try {
        let result = await dao.findContactByEmail(req.param.email);

        responseObj = new Response(result)
        return res.response(responseObj);
    } catch (error) {

        let message = `Encountered some error : ${err}`;
        console.log(message);
        return message;
    }

}

module.exports = {
    addContact,
    findContactByEmail
}