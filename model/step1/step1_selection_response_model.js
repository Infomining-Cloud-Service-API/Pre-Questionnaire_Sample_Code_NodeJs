class Step1SelectionResponseModel {
    constructor(data) {
        this.step1_selection_id = data.step1_selection_id;
        this.step1_selection_content = data.step1_selection_content;
        this.follow_up_id = data.follow_up_id;
        this.step1_selection_required = data.step1_selection_required;
    }
}

module.exports = { Step1SelectionResponseModel };