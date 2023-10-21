var request = require('request')
var constant = require('../constant')
var baseResponseModel = require('../model/base_response_model')
var authTokenResponseModel = require('../model/auth/auth_token_response_model')

if (require.main === module) {
    main();
}

function main() {
    getAccessToken(constant.projectId, constant.secretKey);
    // getAccessTokenUsingRefreshToken(constant.refreshToken);
}

/**
 * @apiNote
 *   OAuth 2.0 : Get Access Token
 *   path: /v1/auth/token
 *
 * @param authorization <- Basic {base64_encode(Project-id:Secret-Key)} (required)
 *    "Basic " + Base64.getEncoder().encodeToString((Project-id:Secret-Key).getBytes())
 */
function getAccessToken(projectId, secretKey) {
    const options = {
        uri: constant.authUrl + '/v1/auth/token',
        headers: {
            'Content-Type': constant.contentType,
            'Authorization': 'Basic ' + Buffer.from(projectId + ':' + secretKey).toString('base64'),
        },
    };
    request.post(options, function(e, response, body){
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), authTokenResponseModel.AuthTokenResponseModel);
        console.log(JSON.stringify(base));
    });
} 
  
/**
 * @apiNote
 *   getAccessTokenUsingRefreshToken
 *   path: /v1/auth/refreshToken
 *
 * @param refreshToken <- Your_Refresh_Token (required)
 */
function getAccessTokenUsingRefreshToken(refreshToken) {
    const options = {
        uri: constant.authUrl + '/v1/auth/refreshToken',
        headers: {
            'Refresh-Token': refreshToken,
            'Content-Type': constant.contentType,
        },
    };
    request.post(options, function(e, response, body){
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), authTokenResponseModel.AuthTokenResponseModel);
        console.log(JSON.stringify(base));
    });
}