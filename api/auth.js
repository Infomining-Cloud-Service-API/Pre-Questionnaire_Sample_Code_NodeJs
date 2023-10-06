var request = require('request')
var BaseResponseModel = require('../model/base_response_model')
var AuthTokenResponseModel = require('../model/auth/auth_token_response_model')
authUrl = 'https://auth.infomining-cloud.com'
projectId = 'inviting_project-ZJN438549'
projectSecret = 'JQcirsiaKRU5i850hDpywF0oyYfHvsxL'
accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTQxNjA5OTksImlhdCI6MTY5NDE1OTE5OSwiY29tcGFueV9pZHgiOjEzLCJwcm9qZWN0X2lkeCI6NTIsImFwaV9pbmZvIjpbeyJhcGlfdHlwZSI6MCwic3Vic2NyaWJlX3JhbmsiOjAsInN1YnNjcmliZV90eXBlIjoxfSx7ImFwaV90eXBlIjoxLCJzdWJzY3JpYmVfcmFuayI6MSwic3Vic2NyaWJlX3R5cGUiOjZ9XX0.gjcsV3mkUqIQLF8AiEgopPGIev4b7Lx0PL_T3fDwXuw'
refreshToken = '5N8lZ1GeZbdrTTGnTAy50nlqbBA5Y726zkpk2NBH71xKF3sxCBEEXQLM73QzJ3hBxzLyBPTzt1vvI4Mr+m+7KXanBVDqf3lDbJmu9KMFAQXIzPji8l/S7ab6UZ/9y3760'
ContentType = 'application/x-www-form-urlencoded'

if (require.main === module) {
    main();
}

function main() {
    getToken(authUrl + '/v1/auth/token', projectId, projectSecret);
    // getRefreshToken(authUrl + '/v1/auth/refresh_token', refreshToken);
}

// ========== Issuing tokens  ==========
/*
    <parameters>
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
            'Content-Type': ContentType,
        },
    };
    request.post(options, function(e, response, body){
        const base = new BaseResponseModel.BaseResponseModel(JSON.parse(response.body), AuthTokenResponseModel.AuthTokenResponseModel);
        console.log(JSON.stringify(base));
    });
} 
  
// ========== Token reissuance  ==========
/*
    <parameters>
    url : /v1/auth/refresh_token
    refreshToken : refreshToken
*/
function getRefreshToken(url, refreshToken){
    const options = {
        uri: url,
        headers: {
            'Refresh-Token': refreshToken,
            'Content-Type': ContentType,
        },
    };
    request.post(options, function(e, response, body){
        const base = new BaseResponseModel.BaseResponseModel(JSON.parse(response.body), AuthTokenResponseModel.AuthTokenResponseModel);
        console.log(JSON.stringify(base));
    });
}