# INFOMINING API REFERENCE - Node.JS
  InfoMining API Reference for Node.JS

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
- model
    - auth
        - auth_token_response_model.js
    - report
        - report_answer_response_model.js
        - report_content_response_model.js
        - report_id_response_model.js
        - report_response_model.js
    - step1
        - step1_history_response_model.js
        - step1_question_response_model.js (not use)
        - step1_report_response_model.js (not use)
        - step1_selection_response_model.js (not use)
        - step1_sub_question_response_model.js (not use)
        - step1_total_response_model.js
    - step2
        - step2_departments_response_model.js (not use)
        - step2_history_response_model.js
        - step2_question_response_model.js (not use)
        - step2_report_response_model.js (not use)
        - step2_selection_response_model.js (not use)
        - step2_total_response_model.js
    - step3
        - step3_follow_up_response_model.js (not use)
        - step3_history_response_model.js
        - step3_question_response_model.js (not use)
        - step3_report_response_model.js (not use)
        - step3_selection_response_model.js (not use)
        - step3_total_response_model.js
    - symptom
        - symptom_response_model.js
    - base_response_model.js
    - status_response_model.js
- constant.js

<br>
<br>

# 0AUTH2.0 SCENARIO

**OAuth 2.0**은 웹서비스나 응용 프로그램에 접근 할 수 있는 권한을 다른 사용자에게 위임하도록 설계된 표준 프레임워크 입니다.

<br>
<br>

**Infomining Cloud API는 OAuth 2.0 표준**을 서비스 구조에 따라 클라이언트 자격증빙 방식으로 변경하여 인증을 진행합니다.

<br>
<br>

클라이언트가 API를 사용하기 위해서는 자격이 증빙된 토큰 값(Access Token)이 필요하며,
<br>
 HTTP 헤더에 acessToken을 포함하여 요청해야 합니다.
<br>
<br>

![get_access_img1](https://github.com/Benew-Software/infomining_platform/assets/46470539/fafa595a-24e9-4229-8b38-91412f2a7d8f)

<br>
<br>

|||
|---|---|
|Authhentication|인증 키(Project ID, Secret Key)를 사용하여 엑세스토큰을 요청합니다.<br>인증 서버에서 클라이언트에 대한 자격을 증명합니다.<br>자격증명이 완료되면 엑세스 토큰이 발급 됩니다.|
|Authorization<br>(API Calls)|엑세스토큰을 이용하여 리소스 서버에 보호된 자원을 요청합니다.<br>엑세스토큰에 부여된 구독 정보, 접근 권한, 보안과 관련된 정보를 검증합니다.<br>검증이 완료되면 요청한 자원을 반환합니다.|

<br>

**#Get Access Token과 #Get Access Token Using Refresh Token에서는 accessToken 을 발급받는 프로세스와 관련된 End Point의 상세 스펙과 호출방식에 대해 안내합니다.**

<br>
<br>

인증과 관련된 자세한 내용은 **Develop Document > Api Common Guid > Authentication** 에서 확인하실 수 있습니다.

<br>
<br>

## #Get Access Token

프로젝트 단위로 발급받은 인증키(ProjectID, SecretKey)를 사용하여 실제로 API를 호출할 때사용되는 사용자 토큰(AccessToken, Refresh Token)을 요청합니다.
<br>
Access Token은 발급 후 20분이 지나면 사용할 수 없으므로 만료시에는
<br>
**v1/auth/refreshToken EndPoint(Get Access Token using Refresh Token)** 를 활용해 재발급 받을 수 있습니다.


<br>

End Point : **v1/auth/token**

<br>
<br>

## #Get Access Token Using Refresh Token

이미 Access Token을 발급 받았다면 Refresh Token을 사용하여 간편하게 만료된 Access Token을 재발급 할 수 있습니다.<br>Refresh Token은 발급후 7일간 유효하므로 데이터 베이스나 글로벌 변수에 저장하여 재사용하는 것을 권장합니다.<br>Refresh Token이 만료된이후에는 **v1/auth/accessToken** End Point를 통해 재발급 받을 수 있습니다.<br>API를 호출할때마다 AccessToken 발급을 요청하는 것은 퍼포먼스에 부정적이므로 만료시에만 재발급하도록 로직 구현 바랍니다.


<br>

End Point : **v1/auth/refreshToken**


<br>
<br>


# PREPARATION SCENARIO

<br>

## #Report Start

<br>

## #Report Start With Profile

<br>
<br>

# STEP1 SCENARIO ENDPOINT

<br>

## #Get Question

<br>

## #Get History

<br>
<br>

# SYMPTOM SELECTION

<br>

## #Get Symptoms

<br>

## #Get NLP Symptoms

<br>

## #Symptom Select

<br>

## #Get Departments

<br>
<br>

# STEP2 SCENARIO ENDPOINT

<br>

## #Get Qusetion

<br>

## #Get History

<br>
<br>

# STEP3 SCENARIO ENDPOINT

<br>

## #Get Qusetion

<br>

## #Get History

<br>
<br>

# GET REPORT ENDPOINT

<br>

## #Get Report Basic

<br>

## #Get Report Medical
