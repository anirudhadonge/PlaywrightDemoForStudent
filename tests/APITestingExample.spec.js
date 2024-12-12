import{test, expect} from "@playwright/test"

const myData = `{
    "assigneeType": "PROJECT_LEAD",
    "description": "Postman project",
    "key": "DM",
    "leadAccountId": "5ec67022ae79a10c16b45d62",
    "name": "My Project First for Demo",
    "projectTemplateKey": "com.pyxis.greenhopper.jira:gh-simplified-agility-kanban",
    "projectTypeKey": "software"
  }`
test.skip("This is my first API test",async ({request})=>{
    const newProject = await request.post("https://anirudhadonge.atlassian.net/rest/api/3/project",{
        headers:{
            "Authorization": `Basic ${Buffer.from('anirudha.donge@gmail.com:ATATT3xFfGF0BF7Xd1Lws4m-TOZMutyZSg1HN4AP7s84hBu3qWyxlLRyjQQyf0RdKG3blcRD8QYBMxhF6AqobZ9q1jfRMRmLcSxzfm28RPAZFOJtMyaFRmB9pAKMuczTnVtaS8tjLgZDrAtReRZWGlYweZ1N8I68rFLPl2zRBsB7qY-sFbSNPbA=A2722B41').toString('base64')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data:myData
    })

    expect(newProject.ok()).toBeTruthy();
})

test("Get the list of projects",async ({request})=>{
    const newProject = await request.get("https://anirudhadonge.atlassian.net/rest/api/3/project",{
        headers:{
            "Authorization": `Basic ${Buffer.from('anirudha.donge@gmail.com:ATATT3xFfGF0BF7Xd1Lws4m-TOZMutyZSg1HN4AP7s84hBu3qWyxlLRyjQQyf0RdKG3blcRD8QYBMxhF6AqobZ9q1jfRMRmLcSxzfm28RPAZFOJtMyaFRmB9pAKMuczTnVtaS8tjLgZDrAtReRZWGlYweZ1N8I68rFLPl2zRBsB7qY-sFbSNPbA=A2722B41').toString('base64')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    const body = JSON.parse((await newProject.body()).toString());
    for(let obj of body){
        console.log(obj.name);
    }
    expect(newProject.ok()).toBeTruthy();
})