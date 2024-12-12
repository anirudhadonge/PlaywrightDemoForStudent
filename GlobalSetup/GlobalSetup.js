import dotenv from "dotenv"

export default function setEnvironment(){
    //console.log(process.env);
    dotenv.config ({
    //path:"./env/.env."+process.env.NODE_ENV,
    path:`./env/.env.${process.env.NODE_ENV}`,
    override:true
 })
 //console.log(process.env);
}