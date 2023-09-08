var request = require('request')
authUrl = 'https://auth.infomining-cloud.com'
projectId='test_prj-wtM795110'
projectSecret='YgvrukdGQO8Gu6IH4ZH7SfVvZHaemeqT'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQxNjA5OTksImlhdCI6MTY5NDE1OTE5OSwiY29tcGFueV9pZHgiOjEzLCJwcm9qZWN0X2lkeCI6NTIsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjAsInN1YnNjcmliZV90eXBlIjoxfSx7ImFwaV90eXBlIjoxLCJzdWJzY3JpYmVfcmFuayI6MSwic3Vic2NyaWJlX3R5cGUiOjZ9XX0.gjcsV3mkUqIQLF8AiEgopPGIev4b7Lx0PL_T3fDwXuw'
refreshToken = 'LDTMm1hWcf/sxoaS/utwJajCqpwP4xkW89E7qWG5EbptBh1d4LiFfUlLX/WjPSVEYG3pt1KfgJLOG67eiDcm9g0wG/oq31syBv2va3elV5o1'

if (require.main === module) {
    main();
}

function main() {
    getToken(authUrl + '/v1/auth/token', projectId, projectSecret);
    // getRefreshToken(authUrl + '/v1/auth/refresh_token', refreshToken);
}

// ========== Issuing tokens  ==========
/*
    url : /v1/auth/token
    projectId : project ID
    proejctSecret : project secret key
*/
function getToken(url, projectId, projectSecret){
    const options = {
        uri: url,
        headers: {
            'Project-Id': projectId,
            'Project-Secret': projectSecret,
        },
    };
    request.post(options, function(e, response, body){
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}
  
// ========== Token reissuance  ==========
/*
    url : /v1/auth/refresh_token
    refreshToken : refreshToken
*/
function getRefreshToken(url, refreshToken){
    const options = {
        uri: url,
        headers: {
            'Refresh-Token': refreshToken,
        },
    };
    request.post(options, function(e, response, body){
        console.log('response.statusCode : ' + response.statusCode);
        console.log('response.body : ' + response.body);
    });
}