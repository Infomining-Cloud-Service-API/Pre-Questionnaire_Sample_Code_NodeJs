var request = require('request')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQxNjI4MzYsImlhdCI6MTY5NDE2MTAzNiwiY29tcGFueV9pZHgiOjEzLCJwcm9qZWN0X2lkeCI6NTIsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjAsInN1YnNjcmliZV90eXBlIjoxfSx7ImFwaV90eXBlIjoxLCJzdWJzY3JpYmVfcmFuayI6MSwic3Vic2NyaWJlX3R5cGUiOjZ9XX0.3NMPtRVRWhXumTs_A9T7tnjBrnXrRB2EYa_NxlijRgU'
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
    // saveStep3ReportObjective(
    //     url = apiUrl + '/v1/report/step3/saveReportObjective',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     question_id = question_id,
    //     selection_id = selection_id,
    // )
    // saveStep3ReportSubjective(
    //     url = apiUrl + '/v1/report/step3/saveReportSubjective',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     question_id = question_id,
    //     input_txt = 'testInput',
    // )
    // saveStep3ReportFollowUp(
    //     url = apiUrl + '/v1/report/step3/saveReportFollowup',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     followup_question_id = followup_question_id,
    //     input_txt = 'testInput',
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
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
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
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
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
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step3 Scenario : Save Step3 Report Objective ==========
/*
    <parameters>
    url : /v1/report/step3/saveReportObjective
    accessToken : OAuth2.0 accessToken (auth.py > getToken())
    report_id : identifier of report
    question_id : identifier of question
    selection_id : identifier of Step3 Selection 
*/
function saveStep3ReportObjective(url, accessToken, report_id, question_id, selection_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
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

// ========== Step3 Scenario : Save Step3 Report Subjective ==========
/*
    <parameters>
    url : /v1/report/step3/saveReportSubjective
    accessToken : OAuth2.0 accessToken (auth.py > getToken())
    report_id : identifier of report
    question_id : identifier of question
    input_txt : subjective answer
*/
function saveStep3ReportSubjective(url, accessToken, report_id, question_id, input_txt) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: {
            'report_id': report_id,
            'question_id': question_id,
            'input_txt': input_txt,
        }
    };
    request.post(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step3 Scenario : Save Step3 Report Follow Up ==========
/*
    <parameters>
    url : /v1/report/step3/saveReportFollowup
    accessToken : OAuth2.0 accessToken (auth.py > getToken())
    report_id : identifier of report
    followup_question_id : Step3 Additional Question Identifiers for Questions
    input_txt : subjective answer
*/
function saveStep3ReportFollowUp(url, accessToken, report_id, followup_question_id, input_txt) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: {
            'report_id': report_id,
            'followup_question_id': followup_question_id,
            'input_txt': input_txt,
        }
    };
    request.post(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
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
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
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
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}