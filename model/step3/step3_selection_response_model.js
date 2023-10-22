class Step3SelectionResponseModel {
    constructor(data) {
        this.step3_selection_id = data.step3_selection_id; // Step3 identifier of the selection
        this.step3_selection_content = data.step3_selection_content; // Step3 content of the selection
    }
}

module.exports = { Step3SelectionResponseModel };