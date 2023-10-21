var step3SelectionResponseModel = require('./step3_selection_response_model')
var step3QuestionResponseModel = require('./step3_question_response_model')
class Step3TotalResponseModel {
    constructor(data) {
        this.step3_question_info = new step3QuestionResponseModel.Step3QuestionResponseModel(data.step3_question_info);
        try {
            let res = []
            for (let i = 0; i < data.step3_selection_list.length; i++) {
                res.push(new step3SelectionResponseModel.Step3SelectionResponseModel(data.step3_selection_list[i]));
            }
            this.step3_selection_list = res;
        } catch (e) {
            this.step3_selection_list = null;
        }
        this.step3_scenario_end = data.step3_scenario_end;
    }
}

module.exports = { Step3TotalResponseModel };