var request = require('request')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQxNjA5OTksImlhdCI6MTY5NDE1OTE5OSwiY29tcGFueV9pZHgiOjEzLCJwcm9qZWN0X2lkeCI6NTIsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjAsInN1YnNjcmliZV90eXBlIjoxfSx7ImFwaV90eXBlIjoxLCJzdWJzY3JpYmVfcmFuayI6MSwic3Vic2NyaWJlX3R5cGUiOjZ9XX0.gjcsV3mkUqIQLF8AiEgopPGIev4b7Lx0PL_T3fDwXuw'
reportId = 'report_58_41ec4d60-0706-4cc1-b7bf-7a09ed890262_20230808115843'
questionId = 'base001'
selectionId = 'sbase000'

if (require.main === module) {
    main();
}

function main() {
    // step1GetQuestions(
    //     url = apiUrl + '/v1/step1/questions',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    // )
    // step1GetQuestion(
    //     url = apiUrl + '/v1/step1/question',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     question_id = questionId,
    // )
    // saveStep1Report(
    //     url = apiUrl + '/v1/report/step1/saveReport',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     question_id = questionId,
    //     selection_id = selectionId,
    //     input_txt = 'test',
    // )
    step1History(
        url = apiUrl + '/v1/report/step1/history',
        accessToken = accessToken,
        report_id = reportId,
    )
}

// ========== Step1 Scenario : Get Questions  ==========
/*
    url : /v1/step1/questions
    language_type : 'kr', 'en'(None : 'en')
*/
function step1GetQuestions(url, accessToken, language_type) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: {
            'language_type': language_type,
        }
    };
    request.post(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step1 Scenario : Get Question Only One  ==========
/*
    url : /v1/step1/question
    language_type : 'kr', 'en'(None : 'en')
    question_id : identifier of step1 question
*/
function step1GetQuestion(url, accessToken, language_type, question_id) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: {
            'language_type': language_type,
            'question_id': question_id,
        }
    };
    request.post(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step1 Scenario : Save Step1 Report  ==========
/*
    url : /v1/report/step1/saveReport
    report_id : identifier of report
    question_id : identifier of Step1 question
    selection_id : identifier of Step1 Selection 
    input_txt : Content of Step1 Selection (Exists only when subjective)
*/
function saveStep1Report(url, accessToken, report_id, question_id, selection_id, input_txt) {
    parameter = {
        'report_id': report_id,
        'question_id': question_id,
        'selection_id': selection_id,
    }
    if (input_txt != null) {
        parameter['input_txt'] = input_txt;
    }
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step1 Scenario : Step1 History  ==========
/*
    url : /v1/report/step1/history
    report_id : identifier of report
*/
function step1History(url, accessToken, report_id) {
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