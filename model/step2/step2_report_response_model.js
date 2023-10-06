class Step2ReportResponseModel {
    constructor(data) {
        this.report_id = data.report_id; // Identifier of the report
        this.step2_question_id = data.step2_question_id; // Step 2 identifier of the question
        this.step2_selection_id = data.step2_selection_id; // Step 2 identifier of the selection
        this.step2_input_text = data.step2_input_text; // if Subjective Answer, response content
        this.step2_branch_bool = data.step2_branch_bool; // Whether of scenario questions
        this.step2_reg_date = data.step2_reg_date; // response date
    }
}

module.exports = { Step2ReportResponseModel };