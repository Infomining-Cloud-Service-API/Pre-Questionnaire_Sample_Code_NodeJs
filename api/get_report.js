var request = require('request')
var constant = require('../constant')
var baseResponseModel = require('../model/base_response_model')
var reportResponseModel = require('../model/report/report_response_model')

if (require.main === module) {
    main();
}

function main() {
    // getReportBasic(
    //     accessToken = constant.accessToken,
    //     report_id = constant.reportId,
    // )
    getReportMedical(
        accessToken = constant.accessToken,
        report_id = constant.reportId,
    )
}

/**
 * @apiNote
 *   GetReportBasic (You can view the report as a basic type.)
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param reportId <- identifier of the report (required)
 */
function getReportBasic(accessToken, report_id) {
    const options = {
        uri: constant.getReportUrl + '/v1/report/reportBasic',
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
 *   GetReportMedical (You can view the report as a medical type.)
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param reportId <- identifier of the report (required)
 */
function getReportMedical(accessToken, report_id) {
    const options = {
        uri: constant.getReportUrl + '/v1/report/reportMedical',
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