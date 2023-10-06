class Step1QuestionResponseModel {
    constructor(data) {
        this.step1_question_id = data.step1_question_id;
        this.step1_question_content = data.step1_question_content;
        this.step1_guide = data.step1_guide;
        this.step1_report_type = data.step1_report_type;
        this.step1_answer_type = data.step1_answer_type;
        this.step1_max_selection_count = data.step1_max_selection_count;
    }
}

module.exports = { Step1QuestionResponseModel };