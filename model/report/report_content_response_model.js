var reportAnswerResponseModel = require('../report/report_answer_response_model')
class ReportContentResponseModel {
    constructor(data) {
        this.report_type = data.report_type;
        try {
            let res = []
            for (let i = 0; i < data.report_answer_list.length; i++) {
                res.push(new reportAnswerResponseModel.ReportAnswerResponseModel(data.report_answer_list[i]));
            }
            this.report_answer_list = res;
        } catch (e) {
            this.report_answer_list = null;
        }
    }
}

module.exports = { ReportContentResponseModel };