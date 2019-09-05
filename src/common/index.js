class Response {

    constructor(...data) {
        this.data = data;
    }
}

class ErrorResponse {
    constructor(err, message) {
        this.err = err;
        this.message = message;
    }
}

class Contact {
    constructor(name, email, phNumber, _id) {
        this.name = name;
        this.email = name;
        this.phNumber = phNumber;
        this._id = _id;
    }
}

module.exports = {
    Response,
    Contact,
    ErrorResponse
}