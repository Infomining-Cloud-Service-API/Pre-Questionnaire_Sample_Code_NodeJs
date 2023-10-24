var request = require('request')
var constant = require('../constant')
var baseResponseModel = require('../model/base_response_model')
var reportResponseModel = require('../model/report/report_response_model')

if (require.main === module) {
    main();
}

function main() {
    // getBasicReport(
    //     accessToken = constant.accessToken,
    //     report_id = constant.reportId,
    // )
    // getMedicalReport(
    //     accessToken = constant.accessToken,
    //     report_id = constant.reportId,
    // )
}

/**
 * @apiNote
 *   GetBasicReport (You can view the report as a basic type.)
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param reportId <- identifier of the report (required)
 */
function getBasicReport(accessToken, report_id) {
    const options = {
        uri: constant.getReportUrl + '/v1/report/basicReport',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.contentType,
        },
        qs: {
            'report_id': report_id,
        }
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), reportResponseModel.ReportResponseModel, true);
        console.log(JSON.stringify(base));
    });
}

/**
 * @apiNote
 *   GetMedicalReport (You can view the report as a medical type.)
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param reportId <- identifier of the report (required)
 */
function getMedicalReport(accessToken, report_id) {
    const options = {
        uri: constant.getReportUrl + '/v1/report/medicalReport',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.contentType,
        },
        qs: {
            'report_id': report_id,
        }
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), reportResponseModel.ReportResponseModel, true);
        console.log(JSON.stringify(base));
    });
}