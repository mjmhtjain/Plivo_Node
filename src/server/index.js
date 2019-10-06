'use strict';

const contact = require('../contact');
const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv').config();

const server = Hapi.server({
    port: process.env.SERVER_PORT || 3000,
    // host: process.env.SERVER_HOST || 'localhost',
    routes: { cors: true }
});

const serverRoutes = contact.routes;

server.route(serverRoutes);

exports.init = async () => {

    await server.initialize();
    return server;
};

exports.start = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    return server;
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});