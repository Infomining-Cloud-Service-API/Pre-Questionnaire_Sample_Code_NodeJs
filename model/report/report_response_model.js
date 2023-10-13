var reportContentResponseModel = require('../report/report_content_response_model')
class ReportResponseModel {
    constructor(data) {
        this.report_category = data.report_category;
        try {
            let res = []
            for (let i = 0; i < data.report_content.length; i++) {
                res.push(new reportContentResponseModel.ReportContentResponseModel(data.report_content[i]));
            }
            this.report_content = res;
        } catch (e) {
            this.report_content = null;
        }
    }
}

module.exports = { ReportResponseModel };