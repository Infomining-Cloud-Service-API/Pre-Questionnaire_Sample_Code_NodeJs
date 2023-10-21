class Step1HistoryResponseModel {
    constructor(data) {
        this.report_id = data.report_id; // Identifier of the report
        this.step1_question_id = data.step1_question_id; // Step2 identifier of the question
        this.step1_selection_id = data.step1_selection_id; // Step2 identifier of the selection
        this.step1_input_text = data.step1_input_text; // if Subjective Answer, response content
        this.step1_reg_date = data.step1_reg_date; // response date
    }
}

module.exports = { Step1HistoryResponseModel };