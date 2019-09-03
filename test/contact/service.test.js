//Require the dev-dependencies
const { mocha, describe, beforeEach, afterEach, it } = require('mocha');
const chai = require('chai');
const { expect } = require('chai');
const should = chai.should();
const sandbox = require('sinon').createSandbox();
const mongo = require('../../src/db');
const contactService = require('../../src/contact/service');

describe('Testing Contact service.js', () => {
    //need to setup mocks for DB service
    beforeEach(async () => {
        sandbox.restore();
    });

    describe('Testing addContact function', () => {
        //assuming object in proper format coming from service validation

        it('will add contact object assuming DB is up', () => {
            //given
            // let fakeCursor = {
            //     insertOne: () => { }
            // }
            // let fakeConnect = {
            //     collection: () => fakeCursor
            // }
            // let samplePayload = {
            //     "email": "email@email.com",
            //     "name": "a",
            //     "phNumber": "1313131121"
            // }

            // let req = {}

            // let expectedResult = {};

            // sandbox.stub(fakeCursor, 'insertOne').withArgs(samplePayload).returns(expectedResult);
            // sandbox.stub(fakeConnect, 'collection').withArgs('collection').returns(fakeCursor);
            // sandbox.stub(mongo, 'connect').resolves(fakeConnect);

            // contactService.addContact()
        })

        it('will add contact object assuming DB is down', () => {

        })
    })
})