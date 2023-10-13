var request = require('request')
var baseResponseModel = require('../model/base_response_model')
var step2QuestionResponseModel = require('../model/step2/step2_question_response_model')
var step2TotalResponseModel = require('../model/step2/step2_total_response_model')
var step2ReportResponseModel = require('../model/step2/step2_report_response_model')
var step2DepartmentsResponseModel = require('../model/step2/step2_departments_response_model')
var statusResponseModel = require('../model/status_response_model')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTY1OTUzMjksImlhdCI6MTY5NjU5MzUyOSwiY29tcGFueV9pZHgiOjE1LCJwcm9qZWN0X2lkeCI6NTAsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjEsInN1YnNjcmliZV90eXBlIjoyfV19.4V6vaO0FNLuS9BLjnnoYp5KhfO4YgmxIdExm7Anb3eM'
reportId = 'report_58_41ec4d60-0706-4cc1-b7bf-7a09ed890262_20230808115843'
symptom_id = 'f0c54334fa4b4d048c875e806644f02d'
questionId = 'ss001'
selectionId = 'ch01'
ContentType = 'application/x-www-form-urlencoded'
question_type = 'Objective';


if (require.main === module) {
    main();
}

function main() {
    // getQuestions(
    //     url = apiUrl + '/v1/step2/questions',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     symptom_id = symptom_id,
    // )
    // getQuestion(
    //     url = apiUrl + '/v1/step2/question',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     question_id = questionId,
    //     report_id = reportId,
    // )
    // getBranchQuestion(
    //     url = apiUrl + '/v1/step2/branchQuestion',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     selection_id = selectionId,
    //     report_id = report_id,
    // )
    // answerToQuestion(
    //     url = apiUrl + '/v1/report/step2/answer',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     question_id = questionId,
    //     selection_id = selectionId,
    //     input_txt = null,
    //     qusetion_type = question_type,
    // )
    // answerToQuestions(
    //     url = apiUrl + '/v1/report/step2/answers',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     answers = [],
    //     question_id = questionId,
    //     selection_id = selectionId,
    //     input_txt = null,
    //     qusetion_type = question_type,
    // )
}

// ========== Step2 Scenario : Get Questions ==========
/*
    <parameters>
    url : /v1/step2/questions
    language_type : 'kr', 'en'(None : 'en')
    symptom_id : identifier of symptom
*/
function getQuestions(url, accessToken, language_type, symptom_id) {
    parameter = {
        'symptom_id': symptom_id,
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
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step2QuestionResponseModel.Step2QuestionResponseModel, true);
        console.log(JSON.stringify(base));
    });
}

// ========== Step2 Scenario : Get Question ==========
/*
    <parameters>
    url : /v1/step2/question
    language_type : 'kr', 'en'(None : 'en')
    question_id : identifier of question
    report_id : identifier of report
*/
function getQuestion(url, accessToken, language_type, question_id, report_id) {
    parameter = {
        'question_id': question_id,
        'report_id': report_id,
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
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step2TotalResponseModel.Step2TotalResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Step2 Scenario : Get Branch Question ==========
/*
    <parameters>
    url : /v1/step2/question
    language_type : 'kr', 'en'(None : 'en')
    selection_id : identifier of Step2 Selection 
    report_id : identifier of Report
*/
function getBranchQuestion(url, accessToken, language_type, selection_id, report_id) {
    parameter = {
        'selection_id': selection_id,
        'report_id': report_id,
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
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step2QuestionResponseModel.Step2QuestionResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Step2 Scenario : Answer To Question ==========
/*
    <parameters>
    url : /v1/report/step2/answer
    report_id : identifier of report
    question_id : identifier of question
    selection_id : identifier of Step2 Selection 
    input_txt : Answers to subjective questions
    question_type : Type of question to save (answer_type value handed over by question) (Objective, Subjective, Complex-subjective)
*/
function answerToQuestion(url, accessToken, report_id, question_id, selection_id, input_txt, question_type) {
    parameter = {
        'report_id': report_id,
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
            'Content-Type': ContentType,
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), statusResponseModel.StatusResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Step2 Scenario : Answer To Questions ==========
/*
    <parameters>
    url : /v1/report/step2/answers
    report_id : identifier of report
    answers : Report Save Content List
    question_id : identifier of question
    selection_id : identifier of Step2 Selection 
    input_txt : Answers to subjective questions
    question_type : Type of question to save (answer_type value handed over by question) (Objective, Subjective, Complex-subjective)
*/
function answerToQuestions(url, accessToken, report_id, question_id, selection_id, input_txt, question_type) {
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
            'Content-Type': ContentType,
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), statusResponseModel.StatusResponseModel);
        console.log(JSON.stringify(base));
    });
}