//Require the dev-dependencies
const { mocha, describe, beforeEach, afterEach, it } = require('mocha');
const chai = require('chai');
const { expect } = require('chai');
const chaiHttp = require('chai-http');
const hapiServer = require('../src/server');
const should = chai.should();


chai.use(chaiHttp);
describe('Testing Server APIs', function () {
    let server;

    beforeEach(async () => {
        server = await hapiServer.init();
    });

    afterEach(async () => {
        await server.stop();
    });

    it(' / responds with 200', async () => {
        const res = await server.inject({
            method: 'get',
            url: '/'
        });

        expect(res.statusCode).to.equal(200);
        expect(res.payload).to.equal(`Test API`);
    });

    describe(`tests for '/add' API`, function(){

        it(` sends valid input and expects response with 200 `, async () => {
            
            let givenPayload = {
                "email": "email@email.com",
                "name": "a",
                "phNumber": "1313131121"
            }

            const res = await server.inject({
                method: 'post',
                url: '/add',
                payload: givenPayload
            });
    
            expect(res.statusCode).to.equal(200);
            let parsedResponse = JSON.parse(res.payload);
            expect(parsedResponse.insertedObjects).to.be.not.null;
            expect(parsedResponse.insertedObjects[0]).to.be.not.null;
            expect(parsedResponse.count).to.be.greaterThan(0);
        });
    
        it(` sends invalid input and expects response with 500 `, async () => {
            
        });

        it(` sends valid input with duplicate email param and expects response with 500 `, async () => {
            
        });

    })

    describe(`tests for '/edit' API`, function(){

        it(` sends valid input and expects response with 200 `, async () => {
        
        });
    
        it(` sends invalid input and expects response with 200 `, async () => {
            
        });
    
        it(` sends input where _id doesnt exist and expects response 500 `, async () => {
            
        });

    })

    describe(`tests for '/delete' API`, function(){

        it(` sends valid input and expects response 200 `, async () => {
        
        });
    
        it(` sends invalid input and expects response 500 `, async () => {
            
        });

        it(` sends valid input wherere email doesn't exist and expects response 500 `, async () => {
            
        });

    })
   
});