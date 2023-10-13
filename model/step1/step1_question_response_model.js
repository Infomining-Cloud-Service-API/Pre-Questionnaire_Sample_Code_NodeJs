class Step1QuestionResponseModel {
    constructor(data) {
        this.step1_question_info = data.step1_question_info; // Infomation of Step 1 question
        this.step1_question_id = data.step1_question_id; // Step 1 identifier of the question
        this.step1_question_content = data.step1_question_content; // Step 1 content of the question
        this.step1_guide = data.step1_guide; // Step 1 guide of the question
        this.step1_report_type = data.step1_report_type; // Step 1 Reporting Category for Questions
        this.step1_answer_type = data.step1_answer_type; // QuestionType ex) Subjective, Objective
        this.step1_branch_bool = data.step1_branch_bool; // If you need to go to another question
        this.step1_max_selection_count = data.step1_max_selection_count; // Maximum number of choices for optional questions
        this.step1_question_required = data.step1_question_required; // Is it a mandatory answer question
    }
}

module.exports = { Step1QuestionResponseModel };