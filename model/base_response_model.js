class BaseResponseModel {
    constructor(data) {
        this.http_status = data.http_status;
        this.code = data.code;
        this.data = data.data;
        this.message = data.message;
    }
}

module.exports = { BaseResponseModel };