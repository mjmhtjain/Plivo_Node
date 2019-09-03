const mongo = require('../db');

const addContact = (contact) => {
    let db
    return mongo.connect()
        .then(db => {
            return db.collection("contact")
                .insertOne(contact);
        })
        .catch(err => {
            console.log(`Encountered some error : ${err}`);
            return err;
        })
        .finally(()=>{
            mongo.close();
        })
}

module.exports = {
    addContact
}