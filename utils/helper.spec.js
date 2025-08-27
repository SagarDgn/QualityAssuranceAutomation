import { expect } from "@playwright/test";
const axios= require('axios');

let apiurl;

async function authenticateUser(username, password, {request}){
    const apiurl= await getApiBaseUrl();
    const headers={
        "Content-type": "application/json",
    };

    const requestBody= {
        email: username,
        password: password,
    };

    const response= await request.post(`${apiurl}/users/login`,{
        data: requestBody,
        headers,
    });
    expect(response.status()).toBe(200);
    const responseBody= await response.json();
    const token= responseBody.token;
    return token;
}

async function getApiBaseUrl(){
    apiurl= process.env.API_BASE_URL;
    if(!apiurl){
        apiurl='https://thinking-tester-contact-list.herokuapp.com ';
    }
    return apiurl;
}

async function createEntity(userData, accessToken, module, {request}){
    const apiurl= await getApiBaseUrl();

    const headers={
        "Content-type": "application/json",
        "Accept": "application/json",
        "authorization": "Bearer" + accessToken,
    };

    const response= await request.post(apiurl + module,{
        headers,
        data: JSON.stringify(userData),
    });
    const responseBody= await response.json();
    const statusCode= response.status();
    expect(statusCode).toBe(201);

    if(responseBody && responseBody.id){
        return responseBody.id;
    }else{
        return null;
    }
};

async function deleteEntity(accessToken, module, {request}){
    const apiurl= await getApiBaseUrl();
    const headers={
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer"+ accessToken

    };
    const response= await (request.delete(apiurl)+module,{
        headers,
    });
    const statusCode= response.status();
    expect(statusCode().toBe(200));
}

async function validateEntity(accessToken, module, status,{request}){
    const apiurl= await getApiBaseUrl();
    const headers={
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer"+ accessToken
    };
    const response= await request.getApiBaseUrl(apiurl+module,{
        headers,
    });
    const statusCode= response.status();
    expect(statusCode().toBe(parseInt(status)));
}

async function getEntity(){}
module.exports={authenticateUser, createEntity,deleteEntity,validateEntity};
