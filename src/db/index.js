const MongoClient = require('mongodb').MongoClient;
let dbConnection = undefined;

const connect = () => {

    const HOST = process.env.MONGO_HOST || "localhost";
    const PORT = process.env.MONGO_PORT || "8989";
    const USERNAME = process.env.MONGO_USER || "";
    const PASSWORD = process.env.MONGO_PASSWORD || "";
    const DB = process.env.MONGO_DB || "DB";
    const connectionString = `mongodb://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/?ssl=true`;
    // mongodb://azurecosmosdbplivo:8Dr1Uotxi4d8GrGtckrGpO1NJEylw6Wl6a3NuJxRSoncXOBc16EMteR2ob929hx6lIV775VS2QM0ET23Wh5waw==@azurecosmosdbplivo.documents.azure.com:10255/?ssl=true&replicaSet=globaldb

    return MongoClient
        .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(connection => {
            dbConnection = connection;
            return connection.db(DB);
        })
        .catch(err => {
            console.log(`Connection error occured: ${err}`);
        })
}

const close = () => {

    if (dbConnection) {
        dbConnection.close()
            .then(() => {
                console.log(`Mongo Connection Closed`);
                dbConnection = undefined;
            })
            .catch(err => {
                console.log(`Mongo Close Connection throwed an error: ${err}`);
            })
    }
}

module.exports = {
    connect,
    close
}