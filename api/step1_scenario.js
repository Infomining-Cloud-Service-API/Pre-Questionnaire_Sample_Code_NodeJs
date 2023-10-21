var request = require('request')
var constant = require('../constant')
var baseResponseModel = require('../model/base_response_model')
var step1TotalResponseModel = require('../model/step1/step1_total_response_model')
var step1HistoryResponseModel = require('../model/step1/step1_history_response_model')

if (require.main === module) {
    main();
}

function main() {
    // getQuestion(
    //     accessToken = constant.accessToken,
    //     report_id = constant.reportId,
    //     // language_type = constant.language_type,
    //     // question_id = constant.step1_question_id,
    //     // selection_id = constant.step1_selection_id,
    //     // input_txt = 'test',
    // )
    // getHistory(
    //     accessToken = constant.accessToken,
    //     report_id = constant.reportId,
    // )
}

/**
 * @apiNote
 *   Step1 Question (Save your answers and view the following questions)
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param report_id <- Your_Report_Id  (required)
 * @param language_type <- ex) kr, en (optional)
 * @param question_id <- (optional)
 * @param selection_id <- (optional)
 * @param input_txt < (optional)
 */
function getQuestion(accessToken, report_id, language_type, question_id, selection_id, input_txt) {
    parameter = {
        'report_id': report_id,
    }
    if (language_type != null) {
        parameter['language_type'] = language_type;
    } 
    if (question_id != null) {
        parameter['question_id'] = question_id;
    } 
    if (selection_id != null) {
        parameter['selection_id'] = selection_id;
    } 
    if (input_txt != null) {
        parameter['input_txt'] = input_txt;
    } 
    const options = {
        uri: constant.step1ScenarioUrl + '/v1/step1/question',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.contentType,
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step1TotalResponseModel.Step1TotalResponseModel);
        console.log(JSON.stringify(base));
    });
}

/**
 * @apiNote
 *   Step1 History (View the list of values I have selected)
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param reportId <- Your_Report_Id  (required)
 */
function getHistory(accessToken, report_id) {
    parameter = {
        'report_id': report_id,
    }
    const options = {
        uri: constant.step1ScenarioUrl + '/v1/step1/history',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.contentType,
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step1HistoryResponseModel.Step1HistoryResponseModel);
        console.log(JSON.stringify(base));
    });
}