const mongo = require('../db');

const addContact = (req, res) => {
    return mongo.connect()
        .then(db => {
            return db.collection("contact")
                .insertOne(req.payload);
        })
        .then(result => {
            let resObject = {
                insertedObjects: result.ops,
                count: result.insertedCount
            };
            return res.response(resObject);
        })
        .catch(err => {
            console.log(`Encountered some error : ${err}`);
            return err;
        })
}

module.exports = {
    addContact
}