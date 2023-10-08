var request = require('request')
var baseResponseModel = require('../model/base_response_model')
var symptomResponseModel = require('../model/symptom/symptom_response_model')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTY1OTUzMjksImlhdCI6MTY5NjU5MzUyOSwiY29tcGFueV9pZHgiOjE1LCJwcm9qZWN0X2lkeCI6NTAsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjEsInN1YnNjcmliZV90eXBlIjoyfV19.4V6vaO0FNLuS9BLjnnoYp5KhfO4YgmxIdExm7Anb3eM'
reportId = 'report_58_41ec4d60-0706-4cc1-b7bf-7a09ed890262_20230808115843'
ContentType = 'application/x-www-form-urlencoded'

if (require.main === module) {
    main();
}

function main() {
    // symptoms(
    //     url = apiUrl + '/v1/symptom/symptoms',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     report_id = reportId,
    //     param = '배가',
    // )
    // mlSymptoms(
    //     url = apiUrl + '/v1/symptom/MLsymptoms',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     report_id = reportId,
    //     param = '배가',
    // )
    // symptomSelect(
    //     url = apiUrl + '/v1/report/step2/symptomSelect',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     symptom_id = symptom_id,
    // )
    // getDepartments(
    //     url = apiUrl + '/v1/step2/departments',
    //     accessToken = accessToken,
    //     language_type = 'kr',
    //     report_id = reportId,
    // )
}

// ========== Symptom Selection : Symptoms ==========
/*
    <parameters>
    url : /v1/symptom/symptoms
    language_type : 'kr', 'en'(None : 'en')
    report_id : identifier of report
    param : search keyword
*/
function symptoms(url, accessToken, language_type, report_id, param) {
    parameter = {
        'report_id': report_id,
        'param': param,
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
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), symptomResponseModel.SymptomResponseModel, true);
        console.log(JSON.stringify(base));
    });
}

// ========== Symptom Selection : ML Symptoms ==========
/*
    <parameters>
    url : /v1/symptom/MLsymptoms
    language_type : 'kr', 'en'(None : 'en')
    report_id : identifier of report
    param : search keyword
*/
function mlSymptoms(url, accessToken, language_type, report_id, param) {
    parameter = {
        'report_id': report_id,
        'param': param,
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
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), symptomResponseModel.SymptomResponseModel, true);
        console.log(JSON.stringify(base));
    });
}

// ========== Symptom Selection : Symptom Select ==========
/*
    <parameters>
    url : /v1/report/symptom/symptomSelect
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

// ========== Symptom Selection : Departments ==========
/*
    <parameters>
    url : /v1/symptom/departments
    language_type : 'kr', 'en'(None : 'en')
    report_id : identifier of report
*/
function getDepartments(url, accessToken, language_type, report_id) {
    parameter = {
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
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step2DepartmentsResponseModel.Step2DepartmentsResponseModel);
        console.log(JSON.stringify(base));
    });
}