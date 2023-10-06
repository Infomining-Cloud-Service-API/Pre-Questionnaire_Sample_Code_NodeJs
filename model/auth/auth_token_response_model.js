class AuthTokenResponseModel {
    constructor(data) {
        this.refresh_token = data['refresh_token'];
        this.refresh_expired = data['refresh_expired'];
        this.access_token = data['access_token'];
        this.access_expired = data['access_expired'];
    }
}

module.exports = { AuthTokenResponseModel };