class StatusResponseModel {
    constructor(data, E) {
        this.status = data.status; // Only (true, false)
    }
}

module.exports = { StatusResponseModel };