class Step3ReportResponseModel {
    constructor(data) {
        this.report_id = data.report_id; // Identifier of the report
        this.step3_question_id = data.step3_question_id; // Step3 identifier of the question
        this.step3_follow_up_id = data.step3_follow_up_id; // Step3 Additional Question Identifiers for Questions
        this.step3_selection_id = data.step3_selection_id; // Step3 identifier of the selection
        this.step3_input_text = data.step3_input_text; // if Subjective Answer, response content
        this.step3_reg_date = data.step3_reg_date; // response date
    }
}

module.exports = { Step3ReportResponseModel };