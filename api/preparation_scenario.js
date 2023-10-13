var request = require('request')
var baseResponseModel = require('../model/base_response_model')
var reportIdResponseModel = require('../model/report/report_id_response_model')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTcxOTAwNzgsImlhdCI6MTY5NzE4ODI3OCwiY29tcGFueV9pZHgiOjE1LCJwcm9qZWN0X2lkeCI6NTAsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjEsInN1YnNjcmliZV90eXBlIjoyfV19.5Sbk3tRiKeODNL1LlLJJSD3UOY9VSjmqq-Vs_7eGnbQ'
ContentType = 'application/x-www-form-urlencoded'
jsonContentType = 'application/json'

if (require.main === module) {
    main();
}

function main() {
    // reportStart(
    //     url = apiUrl + '/v1/report/reportStart',
    //     accessToken = accessToken,
    // )
    // reportStartWithProfile(
    //     url = apiUrl + '/v1/report/step1/reportStartWithProfile',
    //     accessToken = accessToken,
    //     // report_id = null,
    //     // user_name = null,
    //     user_gender = 'M',
    //     // user_pregnant = null,
    //     user_age = '28',
    //     user_height = '70',
    //     user_weight = '150',
    //     user_job = 'programmer',
    //     // user_religion = null,
    // )
}

// ========== Report Start  ==========
/*
    <parameters>
    url : /v1/report/reportStart
*/
function reportStart(url, accessToken) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), reportIdResponseModel.ReportIdResponseModel);
        console.log(JSON.stringify(base));
    });
}

// ========== Report Start With Profile  ==========
/*
    <parameters>
    url : /v1/report/step1/reportStartWithProfile
    required : user_gender, user_age, user_height, user_weight
    non-required : report_id, user_name, user_pregnant, user_job, user_religion
*/
function reportStartWithProfile(url, accessToken, report_id, user_name, user_gender, user_pregnant, user_age, user_height, user_weight, user_job, user_religion) {
    parameter = {
        'user_gender': user_gender,
        'user_age': user_age,
        'user_height': user_height,
        'user_weight': user_weight,
    }
    if (report_id != null) {
        parameter['report_id'] = report_id;
    }
    if (user_name != null) {
        parameter['user_name'] = user_name;
    }
    if (user_pregnant != null) {
        parameter['user_pregnant'] = user_pregnant;
    }
    if (user_job != null) {
        parameter['user_job'] = user_job;
    }
    if (user_religion != null) {
        parameter['user_religion'] = user_religion;
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
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), reportIdResponseModel.ReportIdResponseModel);
        console.log(JSON.stringify(base));
    });
}