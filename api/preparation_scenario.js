var request = require('request')
var baseResponseModel = require('../model/base_response_model')
var reportIdResponseModel = require('../model/report/report_id_response_model')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTY1NzgxNjQsImlhdCI6MTY5NjU3NjM2NCwiY29tcGFueV9pZHgiOjE1LCJwcm9qZWN0X2lkeCI6NTAsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjEsInN1YnNjcmliZV90eXBlIjoyfV19.HAWGQnCzoddgGasSXluZaWasx0qbEwt44VGkk-RdX-4'
ContentType = 'application/x-www-form-urlencoded'

if (require.main === module) {
    main();
}

function main() {
    // reportStart(
    //     url = apiUrl + '/v1/report/reportStart',
    //     accessToken = accessToken,
    // )
    // saveReportTotal(
    //     url = apiUrl + '/v1/report/step1/saveReportTotal',
    //     accessToken = accessToken,
    //     user_name = 'test',
    //     user_gender = 'M',
    //     user_age = 1,
    //     // user_pregnant = null,
    //     // user_height = null,
    //     // user_weight = null,
    //     // user_job = null,
    //     // user_religion = null,
    //     user_pregnant = 'pregnant',
    //     user_height = 1,
    //     user_weight = 1,
    //     user_job = 'testJob',
    //     user_religion = 'testReligion',
    // )
}

// ========== Generating initial report  ==========
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

// ========== Step1 Save Report  ==========
/*
    <parameters>
    url : /v1/report/step1/saveReportTotal
    required : user_name, user_gender, user_age
    non-required : user_pregnant(NULL=not pregant), user_height, user_weight, user_job, user_religion
*/
function saveReportTotal(url, accessToken, user_name, user_gender, user_age, user_pregnant, user_height, user_weight, user_job, user_religion) {
    parameter = {
        'user_name': user_name,
        'user_gender': user_gender,
        'user_age': user_age,
    }
    if (user_pregnant != null) {
        parameter['user_pregnant'] = user_pregnant;
    }
    if (user_height != null) {
        parameter['user_height'] = user_height;
    }
    if (user_weight != null) {
        parameter['user_weight'] = user_weight;
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
            'Content-Type': ContentType,
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), reportIdResponseModel.ReportIdResponseModel);
        console.log(JSON.stringify(base));
    });
}