class Step2QuestionResponseModel {
    constructor(data) {
        this.step2_question_id = data.step2_question_id;  // Step 2 identifier of the question
        this.step2_question_content = data.step2_question_content;  // Step 2 content of the question
        this.step2_guide = data.step2_guide;  // Step 2 guide of the question
        this.step2_report_type = data.step2_report_type;  // Step 2 Reporting Category for Questions
        this.step2_answer_type = data.step2_answer_type;  // QuestionType ex) Subjective, Objective
        this.step2_max_selection_count = data.step2_max_selection_count;  // Maximum number of choices for optional questions
        this.step2_branch_bool = data.step2_branch_bool;  // Whether of scenario questions

        this.step2_img_array = data.step2_img_array; // Step2 Sample image list when image type question
    }
}

module.exports = { Step2QuestionResponseModel };