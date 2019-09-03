const mongo = require('../db');
const contactModel = require('./model');

const addContact = (req, res) => {

    return contactModel.addContact(req.payload)
        .then(result => {
            let resObject = {
                insertedObjects: result.ops,
                count: result.insertedCount
            };
            return res.response(resObject);
        })
        .catch(err => {
            let message = `Encountered some error : ${err}`;
            console.log(message);
            return message;
        })
}

module.exports = {
    addContact
}