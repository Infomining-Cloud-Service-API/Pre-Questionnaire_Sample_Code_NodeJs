class BaseResponseModel {
    //data : json data
    //E : parsing Class
    //list : parsing to list (true or false)
    constructor(data, E, list) {
        if (this.timestamp != null) {
            this.data = data;
        }
        this.http_status = data.http_status;
        this.code = data.code;
        try {
            this.data = new E(data.data);
            if (list == true) {
                let res = []
                for (let i = 0; i < data.data.length; i++) {
                    res.push(new E(data.data[i]));
                }
                this.data = res;
            }
        } catch (e) {
            this.data = null;
        }
        this.message = data.message;
    }
}

module.exports = { BaseResponseModel };