class Step3QuestionResponseModel {
    constructor(data) {
        this.step3_question_id = data.step3_question_id; // Step 3 identifier of the question
        this.step3_question_content = data.step3_question_content; // Step 3 content of the question
        this.step3_guide = data.step3_guide; // Step 3 guide of the question
        this.step3_report_type = data.step3_report_type; // Step 3 Reporting Category for Questions
        this.step3_answer_type = data.step3_answer_type; // QuestionType ex) Subjective, Objective
        this.step3_max_selection_count = data.step3_max_selection_count; // Maximum number of choices for optional questions
        this.step3_follow_up_id = data.step3_follow_up_id; // Step3 Additional Question Identifiers for Questions
    }
}

module.exports = { Step3QuestionResponseModel };