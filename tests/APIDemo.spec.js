import {test,expect} from "@playwright/test"
import { request } from "http";

const obj = `{
    "assigneeType": "PROJECT_LEAD",
    "description": "Postman project",
    "key": "DM1",
    "leadAccountId": "5ec67022ae79a10c16b45d62",
    "name": "ProjectDemo",
    "projectTemplateKey": "com.pyxis.greenhopper.jira:gh-simplified-agility-kanban",
    "projectTypeKey": "software"
}`

test("This is a API demo",async ({request})=>{

    const apiResponse = await request.post("https://anirudhadonge.atlassian.net/rest/api/3/project",{
        headers:{
            "Authorization": `Basic ${Buffer.from('anirudha.donge@gmail.com:ATATT3xFfGF0BF7Xd1Lws4m-TOZMutyZSg1HN4AP7s84hBu3qWyxlLRyjQQyf0RdKG3blcRD8QYBMxhF6AqobZ9q1jfRMRmLcSxzfm28RPAZFOJtMyaFRmB9pAKMuczTnVtaS8tjLgZDrAtReRZWGlYweZ1N8I68rFLPl2zRBsB7qY-sFbSNPbA=A2722B41').toString('base64')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data:obj
    })

    expect(apiResponse.ok()).toBeTruthy();
    ///expect(apiResponse.status()==200).toBeTruthy();
    console.log(apiResponse.statusText);
    console.log(await apiResponse.body());

})


test.only("Get all the Project Created in Jira",async({request})=>{
    const apiResponse = await request.get(process.env.URL,{
        headers:{
            "Authorization": `Basic ${Buffer.from(`${process.env.USER}:${process.env.APIToken}`).toString('base64')}`,
            'Accept': 'application/json',
        },
    })
    console.log(apiResponse.status());
    expect(apiResponse.status()==200).toBeTruthy();
    expect(apiResponse.ok()).toBeTruthy();
    const reponseBody = JSON.parse((await apiResponse.body()).toString());
    let projectNames =[]
    for(let obj of reponseBody){
        let obj1 ={
            name:obj.name
        }
        projectNames.push(obj1);
    }
    console.log(projectNames);
})