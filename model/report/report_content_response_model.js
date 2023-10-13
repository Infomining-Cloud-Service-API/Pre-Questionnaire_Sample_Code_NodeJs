var reportAnswerResponseModel = require('../report/report_answer_response_model')
class ReportContentResponseModel {
    constructor(data) {
        this.report_type = data.report_type;
        try {
            let res = []
            for (let i = 0; i < data.report_answer.length; i++) {
                res.push(new reportAnswerResponseModel.ReportAnswerResponseModel(data.report_answer[i]));
            }
            this.report_answer = res;
        } catch (e) {
            this.report_answer = null;
        }
    }
}

module.exports = { ReportContentResponseModel };