var request = require('request')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQxNjQ3NzcsImlhdCI6MTY5NDE2Mjk3NywiY29tcGFueV9pZHgiOjEzLCJwcm9qZWN0X2lkeCI6NTIsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjAsInN1YnNjcmliZV90eXBlIjoxfSx7ImFwaV90eXBlIjoxLCJzdWJzY3JpYmVfcmFuayI6MSwic3Vic2NyaWJlX3R5cGUiOjZ9XX0.nM8cUzHXdmJSOuL8O5lbLn2uNP5_DaaMfeoIG5AKMPg'
reportId = 'report_58_41ec4d60-0706-4cc1-b7bf-7a09ed890262_20230808115843'

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
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: {
            'language_type': language_type,
            'report_id': report_id,
            'param': param,
        }
    };
    request.get(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
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
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
        qs: {
            'language_type': language_type,
            'report_id': report_id,
            'param': param,
        }
    };
    request.get(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}