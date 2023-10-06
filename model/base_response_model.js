var AuthTokenResponseModel = require('../model/auth_token_response_model')

class BaseResponseModel {
    constructor(data) {
        this.http_status = data.http_status;
        this.code = data.code;
        this.data = new AuthTokenResponseModel.AuthTokenResponseModel(data.data);
        this.message = data.message;
    }
}

module.exports = { BaseResponseModel };