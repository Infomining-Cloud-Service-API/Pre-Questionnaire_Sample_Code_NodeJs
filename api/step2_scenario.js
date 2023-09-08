var request = require('request')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQxNjI4MzYsImlhdCI6MTY5NDE2MTAzNiwiY29tcGFueV9pZHgiOjEzLCJwcm9qZWN0X2lkeCI6NTIsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjAsInN1YnNjcmliZV90eXBlIjoxfSx7ImFwaV90eXBlIjoxLCJzdWJzY3JpYmVfcmFuayI6MSwic3Vic2NyaWJlX3R5cGUiOjZ9XX0.3NMPtRVRWhXumTs_A9T7tnjBrnXrRB2EYa_NxlijRgU'
reportId = 'report_58_41ec4d60-0706-4cc1-b7bf-7a09ed890262_20230808115843'
symptom_id = 'f0c54334fa4b4d048c875e806644f02d'
questionId = 'ss001'
selectionId = 'ch03'


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
    // saveStep2ReportObjective(
    //     url = apiUrl + '/v1/report/step2/saveReportObjective',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     question_id = questionId,
    //     selection_id = selectionId,
    // )
    // saveStep2ReportSubjective(
    //     url = apiUrl + '/v1/report/step2/saveReportSubjective',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     question_id = questionId,
    //     selection_id = selectionId,
    //     input_txt = '주관식답변테스트',
    // )
    // step2History(
    //     url = apiUrl + '/v1/report/step2/history',
    //     accessToken = accessToken,
    //     report_id = reportId,
    // )
}

// ========== Step2 Scenario : Symptom Select ==========
/*
    url : /v1/report/step2/symptomSelect
    report_id : identifier of report
    symptom_id : identifier of symptom
*/
function symptomSelect(url, accessToken, report_id, symptom_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: {
            'report_id': report_id,
            'symptom_id': symptom_id,
        }
    };
    request.post(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step2 Scenario : Departments ==========
/*
    url : /v1/step2/departments
    language_type : 'kr', 'en'(None : 'en')
    report_id : identifier of report
*/
function departments(url, accessToken, language_type, report_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: {
            'language_type': language_type,
            'report_id': report_id,
        }
    };
    request.get(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step2 Scenario : Questions ==========
/*
    url : /v1/step2/questions
    language_type : 'kr', 'en'(None : 'en')
    symptom_id : identifier of symptom
*/
function questions(url, accessToken, language_type, symptom_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: {
            'language_type': language_type,
            'symptom_id': symptom_id,
        }
    };
    request.get(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step2 Scenario : Question ==========
/*
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
        },
        qs: {
            'language_type': language_type,
            'question_id': question_id,
            'report_id': report_id,
        }
    };
    request.get(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step2 Scenario : Branch Question ==========
/*
    url : /v1/step2/question
    language_type : 'kr', 'en'(None : 'en')
    selection_id : identifier of Step2 Selection 
*/
function branchQuestion(url, accessToken, language_type, selection_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: {
            'language_type': language_type,
            'selection_id': selection_id,
        }
    };
    request.get(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step2 Scenario : Save Step2 Report Objective ==========
/*
    url : /v1/report/step2/saveReportObjective
    report_id : identifier of report
    question_id : identifier of question
    selection_id : identifier of Step2 Selection 
*/
function saveStep2ReportObjective(url, accessToken, report_id, question_id, selection_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: {
            'report_id': report_id,
            'question_id': question_id,
            'selection_id': selection_id,
        }
    };
    request.post(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step2 Scenario : Save Step2 Report Subjective ==========
/*
    url : /v1/report/step2/saveReportSubjective
    report_id : identifier of report
    question_id : identifier of question
    selection_id : identifier of Step2 Selection 
    input_txt : Content of Step2 Selection
*/
function saveStep2ReportSubjective(url, accessToken, report_id, question_id, selection_id, input_txt) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: {
            'report_id': report_id,
            'question_id': question_id,
            'selection_id': selection_id,
            'input_txt': input_txt,
        }
    };
    request.post(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step2 Scenario : Step2 History ==========
/*
   url : /v1/report/step2/history
    report_id : identifier of report
*/
function step2History(url, accessToken, report_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: {
            'report_id': report_id,
        }
    };
    request.get(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}