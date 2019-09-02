//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
describe('Testing APIs', function () {

    it(`tests API '/' and expects it to return 'Test API'`, async () => {
        // these must match the route you want to test
        const injectOptions = {
            method: 'GET',
            url: '/'
        }

        // wait for the response and the request to finish
        const response = await server.inject(injectOptions)

        // alright, set your expectations :)
        expect(response.statusCode).to.equal(404)
    })
});