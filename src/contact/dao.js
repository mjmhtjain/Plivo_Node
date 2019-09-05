const mongo = require('../db');

const addContact = (contact) => {

    return mongo.connect()
        .then(db => {
            return db.collection("contact")
                .insertOne(contact);
        })
        .catch(err => {
            console.log(`Encountered some error : ${err}`);
            return err;
        })
        .finally(() => {
            mongo.close();
        })
}

const findContactByEmail = (email) => {

    return mongo.connect()
        .then(db => {
            const query = { 'email': email };

            return db.collection("contact")
                .find(query)
                .toArray();
        })
        .catch(err => {
            console.log(`Encountered some error : ${err}`);
            return err;
        })
        .finally(() => {
            mongo.close();
        })
}

module.exports = {
    addContact,
    findContactByEmail
}