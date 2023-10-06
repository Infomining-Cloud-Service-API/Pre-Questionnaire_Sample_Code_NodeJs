var step1SelectionResponseModel = require('./step1_selection_response_model')
var step1QuestionResponseModel = require('./step1_question_response_model')

class Step1TotalResponseModel {
    constructor(data) {
        this.step1_question_info = new step1QuestionResponseModel.Step1QuestionResponseModel(data.step1_question_info);
        try {
            let res = []
            for (let i = 0; i < data.step1_selection_list.length; i++) {
                res.push(new step1SelectionResponseModel.Step1SelectionResponseModel(data.step1_selection_list[i]));
            }
            this.step1_selection_list = res;
        } catch (e) {
            this.step1_selection_list = null;
        }
    }
}

module.exports = { Step1TotalResponseModel };