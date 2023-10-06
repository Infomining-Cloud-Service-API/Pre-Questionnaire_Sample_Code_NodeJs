class Step2SelectionResponseModel {
    constructor(data) {
        this.step2_selection_id = data.step2_selection_id; // Step2 identifier of the selection
        this.step2_selection_content = data.step2_selection_content; // Step2 content of the selection
    }
}

module.exports = { Step2SelectionResponseModel };