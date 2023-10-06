class Step1ReportResponseModel {
    constructor(data) {
        this.report_id = data.report_id;
        this.step1_question_id = data.step1_question_id;
        this.step1_selection_id = data.step1_selection_id;
        this.step1_input_text = data.step1_input_text;
        this.step1_reg_date = data.step1_reg_date;
    }
}

module.exports = { Step1ReportResponseModel };