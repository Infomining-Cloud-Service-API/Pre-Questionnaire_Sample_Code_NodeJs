class Step2QuestionResponseModel {
    constructor(data) {
        this.step2_question_id = data.step2_question_id;  // Step 2 identifier of the question
        this.step2_question_content = data.step2_question_content;  // Step 2 content of the question
        this.step2_guide = data.step2_guide;  // Step 2 guide of the question
        this.step2_report_type = data.step2_report_type;  // Step 2 Reporting Category for Questions
        this.step2_answer_type = data.step2_answer_type;  // QuestionType ex) Subjective, Objective
        this.step2_max_selection_count = data.step2_max_selection_count;  // Maximum number of choices for optional questions

        // Step2 Sample image list when image type question
        try {
            let res = []
            for (let i = 0; i < data.step2_img_array.length; i++) {
                res.push(data.step2_img_array[i]);
            }
            this.step2_img_array = res;
        } catch (e) {
            this.step2_img_array = null;
        }
        // Step2 Guide image list when image type question
        try {
            let res = []
            for (let i = 0; i < data.step2_guide_img_array.length; i++) {
                res.push(data.step2_guide_img_array[i]);
            }
            this.step2_guide_img_array = res;
        } catch (e) {
            this.step2_guide_img_array = null;
        }
    }
}

module.exports = { Step2QuestionResponseModel };