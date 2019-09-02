const MongoClient = require('mongodb').MongoClient;

// const HOST = process.env.MONGO_HOST || "localhost";
// const PORT = process.env.MONGO_PORT || "8989";
// const USERNAME = process.env.MONGO_USER || "USER";
// const PASSWORD = process.env.MONGO_PASSWORD || "PASSWORD";

const connect = () => {

    const HOST = process.env.MONGO_HOST || "localhost";
    const PORT = process.env.MONGO_PORT || "8989";
    const USERNAME = process.env.MONGO_USER || "USER";
    const PASSWORD = process.env.MONGO_PASSWORD || "PASSWORD";
    const DB = process.env.MONGO_DB || "PASSWORD";

    return MongoClient
        .connect(`mongodb://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/?ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(connection => {
            return connection.db(DB);
        })
        .catch(err => {
            console.log(`Connection error occured: ${err}`);
        })
}

const close = (db) => {
    db.close()
        .catch(err => {
            console.log(`Mongo Close Connection throwed an error: ${err}`);
        })
}

module.exports = {
    connect,
    close
}