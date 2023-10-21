class Step3HistoryResponseModel {
    constructor(data) {
        this.report_id = data.report_id; // Identifier of the report
        this.step3_question_id = data.step3_question_id; // Step 2 identifier of the question
        this.step3_selection_id = data.step3_selection_id; // Step 2 identifier of the selection
        this.step3_input_text = data.step3_input_text; // if Subjective Answer, response content
        this.step3_branch_bool = data.step3_branch_bool; // Whether of scenario questions
        this.step3_reg_date = data.step3_reg_date; // response date
    }
}

module.exports = { Step3HistoryResponseModel };