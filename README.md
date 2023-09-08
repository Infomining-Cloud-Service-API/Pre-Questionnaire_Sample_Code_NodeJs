# INFOMINING API REFERENCE - Node.JS
  InfoMining API Reference for Node.JS

# Getting Started

# File Structure
**Each EndPoint can be referenced through functions within the corresponding file.**

- api
    - auth.js
    - get_report.js
    - preparation_scenario.js
    - step1_scenario.js
    - step2_scenario.js
    - step3_scenario.js
    - symptom_selection.js

# OAuth 2.0

**AccessToken** is required to use InfoMining's API.

The token can be issued through a getToken function call in the file **'auth.py'**.

```js
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
```