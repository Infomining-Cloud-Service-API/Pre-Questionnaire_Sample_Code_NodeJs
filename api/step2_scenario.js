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


if (require.main === module) {
    main();
}

function main() {
    // symptomSelect(
    //     url = apiUrl + '/v1/report/step2/symptomSelect',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     symptom_id = symptom_id,
    // )
    // departments(
    //     url = apiUrl + '/v1/step2/departments',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     report_id = reportId,
    // )
    // questions(
    //     url = apiUrl + '/v1/step2/questions',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     symptom_id = symptom_id,
    // )
    // question(
    //     url = apiUrl + '/v1/step2/question',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     question_id = questionId,
    //     report_id = reportId,
    // )
    // branchQuestion(
    //     url = apiUrl + '/v1/step2/branchQuestion',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     selection_id = selectionId,
    // )
    // saveStep2Report(
    //     url = apiUrl + '/v1/report/step2/saveReport',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     question_id = questionId,
    //     selection_id = selectionId,
    //     input_txt = null,
    //     qusetion_type = 'objective',
    // )
    // step2History(
    //     url = apiUrl + '/v1/report/step2/history',
    //     accessToken = accessToken,
    //     report_id = reportId,
    // )
}

// ========== Step2 Scenario : Symptom Select ==========
/*
    <parameters>
    url : /v1/report/step2/symptomSelect
    report_id : identifier of report
    symptom_id : identifier of symptom
*/
function symptomSelect(url, accessToken, report_id, symptom_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: {
            'report_id': report_id,
            'symptom_id': symptom_id,
        }
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), statusResponseModel.StatusResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Step2 Scenario : Departments ==========
/*
    <parameters>
    url : /v1/step2/departments
    language_type : 'kr', 'en'(None : 'en')
    report_id : identifier of report
*/
function departments(url, accessToken, language_type, report_id) {
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
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step2DepartmentsResponseModel.Step2DepartmentsResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Step2 Scenario : Questions ==========
/*
    <parameters>
    url : /v1/step2/questions
    language_type : 'kr', 'en'(None : 'en')
    symptom_id : identifier of symptom
*/
function questions(url, accessToken, language_type, symptom_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: {
            'language_type': language_type,
            'symptom_id': symptom_id,
        }
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step2QuestionResponseModel.Step2QuestionResponseModel, true);
        console.log(JSON.stringify(base));
    });
}

// ========== Step2 Scenario : Question ==========
/*
    <parameters>
    url : /v1/step2/question
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
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step2TotalResponseModel.Step2TotalResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Step2 Scenario : Branch Question ==========
/*
    <parameters>
    url : /v1/step2/question
    language_type : 'kr', 'en'(None : 'en')
    selection_id : identifier of Step2 Selection 
*/
function branchQuestion(url, accessToken, language_type, selection_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: {
            'language_type': language_type,
            'selection_id': selection_id,
        }
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step2QuestionResponseModel.Step2QuestionResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Step2 Scenario : Save Step2 Report ==========
/*
    <parameters>
    url : /v1/report/step2/saveReport
    report_id : identifier of report
    question_id : identifier of question
    selection_id : identifier of Step2 Selection 
    input_txt : Answers to subjective questions
    question_type : Type of question to save(objective)
*/
function saveStep2Report(url, accessToken, report_id, question_id, selection_id, input_txt, question_type) {
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

// ========== Step2 Scenario : Step2 History ==========
/*
    <parameters>
   url : /v1/report/step2/history
    report_id : identifier of report
*/
function step2History(url, accessToken, report_id) {
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
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step2ReportResponseModel.Step2ReportResponseModel, true);
        console.log(JSON.stringify(base));
    });
}