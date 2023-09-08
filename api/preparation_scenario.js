var request = require('request')
apiUrl = 'https://api.infomining-dev.com/rest_api'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQxNjA5OTksImlhdCI6MTY5NDE1OTE5OSwiY29tcGFueV9pZHgiOjEzLCJwcm9qZWN0X2lkeCI6NTIsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjAsInN1YnNjcmliZV90eXBlIjoxfSx7ImFwaV90eXBlIjoxLCJzdWJzY3JpYmVfcmFuayI6MSwic3Vic2NyaWJlX3R5cGUiOjZ9XX0.gjcsV3mkUqIQLF8AiEgopPGIev4b7Lx0PL_T3fDwXuw'
refreshToken = 'LDTMm1hWcf/sxoaS/utwJajCqpwP4xkW89E7qWG5EbptBh1d4LiFfUlLX/WjPSVEYG3pt1KfgJLOG67eiDcm9g0wG/oq31syBv2va3elV5o1'

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
    url : /v1/report/reportStart
*/
function reportStart(url, accessToken) {
    const options = {
        uri: url,
        headers: {
            'Authorization': 'Bearer ' + accessToken,
        },
    };
    request.post(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}

// ========== Step1 Save Report  ==========
/*
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
            'Content-Type': 'application/json',
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}