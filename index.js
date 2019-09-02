'use strict';

const routes = require('./src/routes');
const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv').config();

const init = async () => {

    const server = Hapi.server({
        port: process.env.SERVER_PORT || 3000,
        host: process.env.SERVER_HOST || 'localhost',
        routes: { cors: true }
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();