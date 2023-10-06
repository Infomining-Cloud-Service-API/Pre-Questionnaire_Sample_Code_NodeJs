var step2SelectionResponseModel = require('./step2_selection_response_model')
var step2QuestionResponseModel = require('./step2_question_response_model')
class Step2TotalResponseModel {
    constructor(data) {
        this.step2_question_info = new step2QuestionResponseModel.Step2QuestionResponseModel(data.step2_question_info);
        try {
            let res = []
            for (let i = 0; i < data.step2_selection_list.length; i++) {
                res.push(new step2SelectionResponseModel.Step2SelectionResponseModel(data.step2_selection_list[i]));
            }
            this.step2_selection_list = res;
        } catch (e) {
            this.step2_selection_list = null;
        }
    }
}

module.exports = { Step2TotalResponseModel };