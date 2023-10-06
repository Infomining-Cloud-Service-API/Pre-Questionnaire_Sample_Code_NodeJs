class ReportResponseModel {
    constructor(data) {
        this.step_idx = data.step_idx;
        this.step_type = data.step_type;
        this.report_category = data.report_category;
        this.report_type = data.report_type;
        this.report_question = data.report_question;
        this.report_text = data.report_text;
    }
}

module.exports = { ReportResponseModel };