class Step3FollowUpResponseModel {
    constructor(data) {
        this.step3_follow_up_id = data.step3_follow_up_id; // Step3 Additional Question Identifiers for Questions
        this.step3_follow_up_content = data.step3_follow_up_content; // Step3 Additional Question content for Questions
        this.step3_follow_up_guide = data.step3_follow_up_guide; // Step3 Additional Question guide for Questions
        this.step3_follow_up_report_type = data.step3_follow_up_report_type; // Step3 Additional Question report type for Questions
        this.step3_follow_up_answer_type = data.step3_follow_up_answer_type; // // Step3 Additional Question answer type for Questions (follow up is only Subjective)
    }
}

module.exports = { Step3FollowUpResponseModel };