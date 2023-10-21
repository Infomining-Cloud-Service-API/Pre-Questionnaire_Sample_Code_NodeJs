class Step1SelectionResponseModel {
    constructor(data) {
        this.step1_selection_id = data.step1_selection_id; // Step1 identifier of the selection
        this.step1_selection_content = data.step1_selection_content; // Step1 content of the selection
    }
}

module.exports = { Step1SelectionResponseModel };