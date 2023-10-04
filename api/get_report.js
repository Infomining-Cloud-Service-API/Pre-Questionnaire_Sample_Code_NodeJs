var request = require('request')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQxNjA5OTksImlhdCI6MTY5NDE1OTE5OSwiY29tcGFueV9pZHgiOjEzLCJwcm9qZWN0X2lkeCI6NTIsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjAsInN1YnNjcmliZV90eXBlIjoxfSx7ImFwaV90eXBlIjoxLCJzdWJzY3JpYmVfcmFuayI6MSwic3Vic2NyaWJlX3R5cGUiOjZ9XX0.gjcsV3mkUqIQLF8AiEgopPGIev4b7Lx0PL_T3fDwXuw'
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
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}