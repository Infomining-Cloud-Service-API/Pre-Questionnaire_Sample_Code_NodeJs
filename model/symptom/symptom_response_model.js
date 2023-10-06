class SymptomResponseModel {
    constructor(data) {
        this.symptom_id = data.symptom_id; // symptom identifier
        this.symptom_content = data.symptom_content; // symptom content
    }
}

module.exports = { SymptomResponseModel };