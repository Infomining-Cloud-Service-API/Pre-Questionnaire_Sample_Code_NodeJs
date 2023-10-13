class ReportAnswerResponseModel {
    constructor(data) {
        this.report_question = data.report_question;
        this.report_answer = data.report_answer;
    }
}

module.exports = { ReportAnswerResponseModel };