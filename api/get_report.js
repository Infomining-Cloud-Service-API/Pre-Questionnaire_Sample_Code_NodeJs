var request = require('request')
var baseResponseModel = require('../model/base_response_model')
var reportResponseModel = require('../model/report/report_response_model')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTY1OTUzMjksImlhdCI6MTY5NjU5MzUyOSwiY29tcGFueV9pZHgiOjE1LCJwcm9qZWN0X2lkeCI6NTAsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjEsInN1YnNjcmliZV90eXBlIjoyfV19.4V6vaO0FNLuS9BLjnnoYp5KhfO4YgmxIdExm7Anb3eM'
refreshToken = 'LDTMm1hWcf/sxoaS/utwJajCqpwP4xkW89E7qWG5EbptBh1d4LiFfUlLX/WjPSVEYG3pt1KfgJLOG67eiDcm9g0wG/oq31syBv2va3elV5o1'
reportId = 'report_58_41ec4d60-0706-4cc1-b7bf-7a09ed890262_20230808115843'
report_type = 'report' //report, question
ContentType = 'application/x-www-form-urlencoded'

if (require.main === module) {
    main();
}

function main() {
    // getSummaryReportInfo(
    //     url = apiUrl + '/v1/report/get_summary_report_info',
    //     accessToken = accessToken,
    //     report_id = reportId,
    //     report_type = report_type,
    // )
}

// ========== Get Report : Get Summary Report info  ==========
/*
    <parameters>
    url : /v1/report/get_summary_report_info
    accessToken : OAuth2.0 accessToken (auth.py > getToken())
    report_id : identifier of report
    report_type : type of report(report, question)
*/
function getSummaryReportInfo(url, accessToken, report_id, report_type) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': ContentType,
        },
        qs: {
            'report_id': report_id,
            'report_type': report_type,
        }
    };
    request.get(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), reportResponseModel.ReportResponseModel, true);
        console.log(JSON.stringify(base));
    });
}