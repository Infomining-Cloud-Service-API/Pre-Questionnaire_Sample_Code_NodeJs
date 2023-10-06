class BaseResponseModel {
    constructor(data, E) {
        this.http_status = data.http_status;
        this.code = data.code;
        this.data = new E(data.data);
        this.message = data.message;
    }
}

module.exports = { BaseResponseModel };