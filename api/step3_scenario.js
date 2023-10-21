var request = require('request')
var constant = require('../constant')
var baseResponseModel = require('../model/base_response_model')
var step3TotalResponseModel = require('../model/step3/step3_total_response_model')
var step3HistoryResponseModel = require('../model/step3/step3_history_response_model')


if (require.main === module) {
    main();
}

function main() {
    // getQuestion(
    //     accessToken = constant.accessToken,
    //     report_id = constant.reportId,
    //     // language_type = constant.language_type,
    //     // question_id = constant.step3_question_id,
    //     // selection_id = constant.step3_selection_id,
    //     // input_txt = 'test',
    // )
    // getHistory(
    //     accessToken = constant.accessToken,
    //     report_id = constant.reportId,
    // )
}

/**
 * @apiNote
 *   Step3 Question (Save your answers and view the following questions)
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param languageType <- ex) kr, en (optional)
 * @param reportId <- identifier of the report (required)
 * @param questionId <- Step3 identifier of the question (optional)
 * @param selectionId <- (optional)
 * @param inputTxt <- (optional)
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
        uri: constant.step1ScenarioUrl + '/v1/step3/question',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.contentType,
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step3TotalResponseModel.Step3TotalResponseModel);
        console.log(JSON.stringify(base));
    });
}

/**
 * @apiNote
 *   Step3 History (View the list of values I have selected)
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param reportId <- Your_Report_Id  (required)
 */
function getHistory(accessToken, report_id) {
    parameter = {
        'report_id': report_id,
    }
    const options = {
        uri: constant.step1ScenarioUrl + '/v1/step3/history',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.contentType,
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step3HistoryResponseModel.Step3HistoryResponseModel);
        console.log(JSON.stringify(base));
    });
}