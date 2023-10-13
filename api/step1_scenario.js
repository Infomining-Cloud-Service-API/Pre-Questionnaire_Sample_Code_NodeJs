var request = require('request')
var baseResponseModel = require('../model/base_response_model')
var step1QuestionResponseModel = require('../model/step1/step1_question_response_model')
var step1TotalResponseModel = require('../model/step1/step1_total_response_model')
var step1ReportResponseModel = require('../model/step1/step1_report_response_model')
var statusResponseModel = require('../model/status_response_model')
var reportIdResponseModel = require('../model/report/report_id_response_model')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTcxOTQ2ODYsImlhdCI6MTY5NzE5Mjg4NiwiY29tcGFueV9pZHgiOjE1LCJwcm9qZWN0X2lkeCI6NTAsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjEsInN1YnNjcmliZV90eXBlIjoyfV19.FqVhArMSlswetdLfJ3Ss04NfJIyebZVIaQuYnAn-0tY'
ContentType = 'application/x-www-form-urlencoded'
jsonContentType = 'application/json'
reportId = 'report_58_41ec4d60-0706-4cc1-b7bf-7a09ed890262_20230808115843'
step1_question_id = 'base001'
selectionId = 'sbase000'
user_age = 27;
user_height = 180;
user_weight = 70;
question_type = 'Objective';

if (require.main === module) {
    main();
}

function main() {
    // getQuestions(
    //     url = apiUrl + '/v1/step1/questions',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    // )
    // getQuestion(
    //     url = apiUrl + '/v1/step1/question',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     question_id = questionId,
    // )
    // answerToQuestion(
    //     url = apiUrl + '/v1/report/step1/saveReport',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     step1_question_id = step1_question_id,
    //     // selection_id = selectionId,
    //     // input_txt = 'test',
    //     question_type = question_type,
    // )
    // answerToQuestions(
    //     url = apiUrl + '/v1/report/step1/answers',
    //     report_id = report_id,
    //     answers = answers,
    //     question_id = question_id,
    //     // selection_id = selection_id,
    //     // input_txt = input_txt,
    //     question_type = question_type,
    // )
}

// ========== Step1 Scenario : Get Questions  ==========
/*
    <parameters>
    url : /v1/step1/questions
    language_type : 'kr', 'en'(None : 'en')
*/
function getQuestions(url, accessToken, language_type) {
    parameter = {}
    if (language_type != null) {
        parameter['language_type'] = language_type;
    } 
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: parameter
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step1QuestionResponseModel.Step1QuestionResponseModel, true);
        console.log(JSON.stringify(base));
    });
}

// ========== Step1 Scenario : Get Question  ==========
/*
    <parameters>
    url : /v1/step1/question
    language_type : 'kr', 'en'(None : 'en')
    question_id : identifier of step1 question
*/
function getQuestion(url, accessToken, language_type, question_id) {
    parameter = {
        'question_id': question_id,
    }
    if (language_type != null) {
        parameter['language_type'] = language_type;
    } 
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: parameter
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step1TotalResponseModel.Step1TotalResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Step1 Scenario : Answer To Question  ==========
/*
    <parameters>
    url : /v1/report/step1/answer
    report_id : identifier of report
    step1_question_id : identifier of Step1 question
    selection_id : identifier of Step1 Selection 
    input_txt : Content of Step1 Selection (Exists only when subjective)
    question_type : Type of question to save (answer_type value handed over by question) (Objective, Subjective, Complex-subjective)
*/
function answerToQuestion(url, accessToken, report_id, step1_question_id, selection_id, input_txt, question_type) {
    parameter = {
        'report_id': report_id,
        'step1_question_id': step1_question_id,
        'question_type': question_type,
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

// ========== Step1 Scenario : Answer To Questions  ==========
/*
    <parameters>
    url : /v1/report/step1/answers
    report_id : identifier of report
    answers : Report Save Content List
    question_id : identifier of Step2 question
    selection_id : identifier of Step2 selection
    input_txt : Answers to subjective questions
    question_type : Type of question to save (answer_type value handed over by question) (Objective, Subjective, Complex-subjective)
*/
function answerToQuestions(url, accessToken, report_id, answers, question_id, selection_id, input_txt, question_type) {
    parameter = {
        'report_id': report_id,
        'answers': answers,
        'question_id': question_id,
        'question_type': question_type,
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
            'Content-Type': jsonContentType,
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), statusResponseModel.StatusResponseModel);
        console.log(JSON.stringify(base));
    });
}