class Step1SubQuestionResponseModel {
    constructor(data) {
        this.step1_sub_question_id = data.step1_sub_question_id; // Step1 identifier of sub selection
        this.step1_sub_question_content = data.step1_sub_question_content; // content of Step1 sub selection
        this.step1_answer_type = data.step1_answer_type; // Type of question ex) Objective type, subjective type
        this.step1_sub_question_unit = data.step1_sub_question_unit; // Units of choice (for base004)
    }
}

module.exports = { Step1SubQuestionResponseModel };