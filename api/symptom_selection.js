var request = require('request')
var constant = require('../constant')
var baseResponseModel = require('../model/base_response_model')
var symptomResponseModel = require('../model/symptom/symptom_response_model')
var step2DepartmentsResponseModel = require('../model/step2/step2_departments_response_model')
var statusResponseModel = require('../model/status_response_model')

if (require.main === module) {
    main();
}

function main() {
    // getSymptoms(
    //     accessToken = constant.accessToken,
    //     report_id = constant.reportId,
    //     language_type = constant.language_type,
    //     search_txt = '배가',
    // )
    getNLPSymptoms(
        accessToken = constant.accessToken,
        language_type = constant.language_type,
        report_id = constant.reportId,
        search_txt = '배가',
    )
    symptomSelection(
        accessToken = constant.accessToken,
        report_id = constant.reportId,
        symptom_id = constant.symptom_id,
    )
    // getDepartments(
    //     accessToken = constant.accessToken,
    //     report_id = constant.reportId,
    //     language_type = constant.language_type,
    // )
}

/**
 * @apiNote
 *   Symptom Search
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param report_id <- identifier of the report (required)
 * @param language_type <- ex) kr, en (optional)
 * @param search_txt <- search word (required)
 */
function getSymptoms(accessToken, report_id, language_type, search_txt) {
    parameter = {
        'report_id': report_id,
        'search_txt': search_txt,
    }
    if (language_type != null) {
        parameter['language_type'] = language_type;
    }
    const options = {
        uri: constant.symptomSelectionUrl + '/v1/symptom/symptomList',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.contentType,
        },
        qs: parameter
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), symptomResponseModel.SymptomResponseModel, true);
        console.log(JSON.stringify(base));
    });
}

/**
 * @apiNote
 *   Machine learning Symptom Search
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param report_id <- identifier of the report (required)
 * @param languageType <- ex) kr, en (optional)
 * @param search_txt <- search word (required)
 */
function getNLPSymptoms(accessToken, report_id, language_type, search_txt) {
    parameter = {
        'report_id': report_id,
        'search_txt': search_txt,
    }
    if (language_type != null) {
        parameter['language_type'] = language_type;
    }
    const options = {
        uri: constant.symptomSelectionUrl + '/v1/symptom/NLPSymptomList',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.contentType,
        },
        qs: parameter
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), symptomResponseModel.SymptomResponseModel, true);
        console.log(JSON.stringify(base));
    });
}

/**
 * @apiNote
 *   Save Symptom Selection Report
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param report_id <- identifier of the report (required)
 * @param symptom_id <- identifier of the symptom (required)
 */
function symptomSelection(accessToken, report_id, symptom_id) {
    const options = {
        uri: constant.symptomSelectionUrl + '/v1/symptom/symptomSelect',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.contentType,
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

/**
 * @apiNote
 *   a list of medical departments by report
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param reportId <- identifier of the report (required)
 * @param languageType <- ex) kr, en (optional)
 */
function getDepartments(accessToken, report_id, language_type) {
    parameter = {
        'report_id': report_id,
    }
    if (language_type != null) {
        parameter['language_type'] = language_type;
    }
    const options = {
        uri: constant.symptomSelectionUrl + '/v1/report/departments',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.contentType,
        },
        qs: parameter
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), step2DepartmentsResponseModel.Step2DepartmentsResponseModel);
        console.log(JSON.stringify(base));
    });
}