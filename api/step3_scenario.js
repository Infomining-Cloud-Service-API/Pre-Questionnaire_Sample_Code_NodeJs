var request = require('request')
var baseResponseModel = require('../model/base_response_model')
var step3QuestionResponseModel = require('../model/step3/step3_question_response_model')
var step3TotalResponseModel = require('../model/step3/step3_total_response_model')
var step3ReportResponseModel = require('../model/step3/step3_report_response_model')
var step3FollowUpResponseModel = require('../model/step3/step3_follow_up_response_model')
var statusResponseModel = require('../model/status_response_model')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTY1OTUzMjksImlhdCI6MTY5NjU5MzUyOSwiY29tcGFueV9pZHgiOjE1LCJwcm9qZWN0X2lkeCI6NTAsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjEsInN1YnNjcmliZV90eXBlIjoyfV19.4V6vaO0FNLuS9BLjnnoYp5KhfO4YgmxIdExm7Anb3eM'
reportId = 'report_58_41ec4d60-0706-4cc1-b7bf-7a09ed890262_20230808115843'
question_id = '628915ca33be448380c45da7ae558cb7'
follow_up_id = '9c77d925f0e94119ba2c31a5d357d511'
followup_question_id = 'followup_jenny123@infomining.co.kr_20230223184447'
selection_id = '32d6f278421440e5af9568460728da76,b1c8e846027e47d7b3b70900586de50d'
ContentType = 'application/x-www-form-urlencoded'


if (require.main === module) {
    main();
}

function main() {
    // questions(
    //     url = apiUrl + '/v1/step3/questions',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     report_id = reportId,
    // )
    // question(
    //     url = apiUrl + '/v1/step3/question',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     question_id = question_id,
    //     report_id = reportId,
    // )
    // followUp(
    //     url = apiUrl + '/v1/step3/followUp',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     follow_up_id = follow_up_id,
    // )
    // saveStep3Report(
    //     url = apiUrl + '/v1/report/step3/saveReport',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     question_id = question_id,
    //     followup_question_id = followup_question_id,
    //     selection_id = selection_id,
    //     input_txt = null,
    //     question_type = 'objective',
    // )
    // step3History(
    //     url = apiUrl + '/v1/report/step3/history',
    //     accessToken = accessToken,
    //     report_id = reportId,
    // )
    // reportEnd(
    //     url = apiUrl + '/v1/report/reportEnd',
    //     accessToken = accessToken,
    //     report_id = reportId,
    // )
}

// ========== Step3 Scenario : Questions ==========
/*
    <parameters>
    url : /v1/step3/questions
    accessToken : OAuth2.0 accessToken (auth.py > getToken())
    language_type : 'kr', 'en'(None : 'en')
    report_id : identifier of report
*/
function questions(url, accessToken, language_type, report_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: {
            'language_type': language_type,
            'report_id': report_id,
        }
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step3QuestionResponseModel.Step3QuestionResponseModel, true);
        console.log(JSON.stringify(base));
    });
}

// ========== Step3 Scenario : Question ==========
/*
    <parameters>
    url : /v1/step3/question
    accessToken : OAuth2.0 accessToken (auth.py > getToken())
    language_type : 'kr', 'en'(None : 'en')
    question_id : identifier of question
    report_id : identifier of report
*/
function question(url, accessToken, language_type, question_id, report_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: {
            'language_type': language_type,
            'question_id': question_id,
            'report_id': report_id,
        }
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step3TotalResponseModel.Step3TotalResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Step3 Scenario : Follow Up ==========
/*
    <parameters>
    url : /v1/step3/followUp
    accessToken : OAuth2.0 accessToken (auth.py > getToken())
    language_type : 'kr', 'en'(None : 'en')
    follow_up_id : Step3 Additional Question Identifiers for Questions
*/
function followUp(url, accessToken, language_type, follow_up_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: {
            'language_type': language_type,
            'follow_up_id': follow_up_id,
        }
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step3FollowUpResponseModel.Step3FollowUpResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Step3 Scenario : Save Step3 Report ==========
/*
    <parameters>
    url : /v1/report/step3/saveReport
    accessToken : OAuth2.0 accessToken (auth.py > getToken())
    report_id : identifier of report
    question_id : identifier of question
    followup_question_id : Identifier of followup question
    selection_id : Identifier of the Step3 selection(Additional questions are subjective without selection_id)
    input_txt : Answers to subjective questions
    question_type : Type of question to save(objective, subjective, mixed, follow_up)
*/
function saveStep3Report(url, accessToken, report_id, question_id, followup_question_id, selection_id, input_txt, question_type) {
    parameter = {
        'report_id': report_id,
        'question_type': question_type,
    }
    if (question_id != null) {
        parameter['question_id'] = question_id;
    }
    if (followup_question_id != null) {
        parameter['followup_question_id'] = followup_question_id;
    }
    if (selection_id != null) {
        parameter['selection_id'] = selection_id;
    }
    if (input_txt != null) {
        parameter['input_txt'] = input_txt;
    }
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), statusResponseModel.StatusResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Step3 Scenario : Step3 History ==========
/*
    <parameters>
    url : /v1/report/step3/history
    accessToken : OAuth2.0 accessToken (auth.py > getToken())
    report_id : identifier of report
*/
function step3History(url, accessToken, report_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: {
            'report_id': report_id,
        }
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step3ReportResponseModel.Step3ReportResponseModel, true);
        console.log(JSON.stringify(base));
    });
}

// ========== Step3 Scenario : Report End ==========
/*
    <parameters>
    url : /v1/report/reportEnd
    accessToken : OAuth2.0 accessToken (auth.py > getToken())
    report_id : identifier of report
*/
function reportEnd(url, accessToken, report_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: {
            'report_id': report_id,
        }
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), statusResponseModel.StatusResponseModel);
        console.log(JSON.stringify(base));
    });
}