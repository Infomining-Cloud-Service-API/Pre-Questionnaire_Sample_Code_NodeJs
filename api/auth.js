var request = require('request')
var baseResponseModel = require('../model/base_response_model')
var authTokenResponseModel = require('../model/auth/auth_token_response_model')
authUrl = 'https://auth.infomining-cloud.com'
projectId = 'inviting_project-ZJN438549'
secretKey = 'JQcirsiaKRU5i850hDpywF0oyYfHvsxL'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTcxOTAwNzgsImlhdCI6MTY5NzE4ODI3OCwiY29tcGFueV9pZHgiOjE1LCJwcm9qZWN0X2lkeCI6NTAsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjEsInN1YnNjcmliZV90eXBlIjoyfV19.5Sbk3tRiKeODNL1LlLJJSD3UOY9VSjmqq-Vs_7eGnbQ'
refreshToken = 'IPMFUda9skBXqFcWYtdE3pmxAukzs9Bc842RVA+ceetUoDgWESWeNUUJOawenFYihGg1oGR34g90FoCEvX4CUKYetUl0plFrRRU/cmbd1mz1QZ7FNsUBWqR4QpxOMqoV0'
ContentType = 'application/x-www-form-urlencoded'

if (require.main === module) {
    main();
}

function main() {
    getAccessToken(authUrl + '/v1/auth/token', projectId, secretKey);
    // getAccessTokenUsingRefreshToken(authUrl + '/v1/auth/refresh_token', refreshToken);
}

// ========== OAuth 2.0 : Get Access Token  ==========
/*
    <parameters>
    url : /v1/auth/token
    projectId : project ID
    secretKey : project secret key
*/
function getAccessToken(url, projectId, secretKey) {
    const options = {
        uri: url,
        headers: {
            'Project-Id': projectId,
            'Secret-Key': secretKey,
            'Content-Type': ContentType,
        },
    };
    request.post(options, function(e, response, body){
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), authTokenResponseModel.AuthTokenResponseModel);
        console.log(JSON.stringify(base));
    });
} 
  
// ========== OAuth 2.0 : Get Access Token Using Refresh Token  ==========
/*
    <parameters>
    url : /v1/auth/refresh_token
    refreshToken : refresh token value
*/
function getAccessTokenUsingRefreshToken(url, refreshToken) {
    const options = {
        uri: url,
        headers: {
            'Refresh-Token': refreshToken,
            'Content-Type': ContentType,
        },
    };
    request.post(options, function(e, response, body){
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), authTokenResponseModel.AuthTokenResponseModel);
        console.log(JSON.stringify(base));
    });
}