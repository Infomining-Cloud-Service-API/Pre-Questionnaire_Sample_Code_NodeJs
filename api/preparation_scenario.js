var request = require('request')
var constant = require('../constant')
var baseResponseModel = require('../model/base_response_model')
var reportIdResponseModel = require('../model/report/report_id_response_model')

if (require.main === module) {
    main();
}

function main() {
    // reportStart(
    //     accessToken = constant.accessToken,
    // )
    // reportStartWithProfile(
    //     accessToken = constant.accessToken,
    //     user_name = 'test',
    //     user_gender = 'M',
    //     // user_pregnant = null,
    //     user_age = '28',
    //     user_height = '70',
    //     user_weight = '150',
    //     user_job = 'programmer',
    //     user_religion = 'test',
    // )
}

/**
 * @apiNote
 *   Generating a report
 *   path: /v1/report/reportStart
 *
 * @param accessToken <- Your_Access_Token (required)
 */
function reportStart(accessToken) {
    const options = {
        uri: constant.preparationScenarioUrl + '/v1/report/reportStart',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.contentType,
        },
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), reportIdResponseModel.ReportIdResponseModel);
        console.log(JSON.stringify(base));
    });
}

/**
 * @apiNote
 *   Generating a report with profile
 *   path: /v1/report/reportStartWithProfile
 *
 * @param accessToken <- Your_Access_Token (required)
 * @param userName <- (required)
 * @param userGender <- (M:Male, F:Female) (required)
 * @param userPregnant <- Pregnancy status of user (preg:pregnant, null:not pregnant) (F <- required, M <- optional)
 * @param userAge <- (required)
 * @param userHeight <- (required)
 * @param userWeight <- (required)
 * @param userJob <- (required)
 * @param userReligion <- (required)
 */
function reportStartWithProfile(accessToken, user_name, user_gender, user_pregnant, user_age, user_height, user_weight, user_job, user_religion) {
    parameter = {
        'user_name': user_name,
        'user_gender': user_gender,
        'user_age': user_age,
        'user_height': user_height,
        'user_weight': user_weight,
        'user_job': user_job,
        'user_religion': user_religion,
    }
    if (user_pregnant != null) {
        parameter['user_pregnant'] = user_pregnant;
    }
    const options = {
        uri: constant.preparationScenarioUrl + '/v1/report/reportStartWithProfile',
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': constant.jsonContentType,
        },
        qs: parameter,
    };
    request.post(options, function (e, response, body) {
        const base = new baseResponseModel.BaseResponseModel(JSON.parse(response.body), reportIdResponseModel.ReportIdResponseModel);
        console.log(JSON.stringify(base));
    });
}