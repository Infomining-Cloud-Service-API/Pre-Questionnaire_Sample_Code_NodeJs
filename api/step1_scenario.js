var request = require('request')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTY0MDMwMTIsImlhdCI6MTY5NjQwMTIxMiwiY29tcGFueV9pZHgiOjE1LCJwcm9qZWN0X2lkeCI6NTAsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjEsInN1YnNjcmliZV90eXBlIjoyfV19.XojwHoWRtlMtzJzJvymJoiVyKwN6NmUIf9aoSDg2j4U'
ContentType = 'application/x-www-form-urlencoded'
reportId = 'report_58_41ec4d60-0706-4cc1-b7bf-7a09ed890262_20230808115843'
questionId = 'base001'
selectionId = 'sbase000'
user_age = 27;
user_height = 180;
user_weight = 70;

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
    // saveStep1UserInfo(
    //     url = apiUrl + '/v1/report/step1/saveReportUserInfo',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     user_age = user_age,
    //     user_height = user_height,
    //     user_weight = user_weight,
    // )
    // step1History(
    //     url = apiUrl + '/v1/report/step1/history',
    //     accessToken = accessToken,
    //     report_id = reportId,
    // )
}

// ========== Step1 Scenario : Get Questions  ==========
/*
    <parameters>
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
    <parameters>
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
    <parameters>
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

// ========== Step1 Scenario : Save Step1 User Info  ==========
/*
    <parameters>
    url : /v1/report/step1/saveReportUserInfo
    report_id : identifier of report
    user_age : Age of user
    user_height : Height of user
    user_weight : Weight of user
*/
function saveStep1UserInfo(url, accessToken, report_id, user_age, user_height, user_weight) {
    parameter = {
        'report_id': report_id,
        'user_age': user_age,
        'user_height': user_height,
        'user_weight': user_weight,
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
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step1 Scenario : Step1 History  ==========
/*
    <parameters>
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