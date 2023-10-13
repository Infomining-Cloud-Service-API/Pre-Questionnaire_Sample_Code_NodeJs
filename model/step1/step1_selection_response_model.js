class Step1SelectionResponseModel {
    constructor(data) {
        this.step1_selection_id = data.step1_selection_id; // Step1 identifier of the selection
        this.step1_selection_content = data.step1_selection_content; // Step1 content of the selection
        // this.follow_up_id = data.follow_up_id; // Identifier of the question that follows based on the choice of choice (If null, end of Step1 question)
        // this.step1_selection_required = data.step1_selection_required; // 0:Not Required    1:Required    2:Depending on your choice
    }
}

module.exports = { Step1SelectionResponseModel };