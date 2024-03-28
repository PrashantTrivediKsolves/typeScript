interface Prashant{
    readonly dbId:number;
    email:string,
    userId:number
    googleId?:string
    startTrail:()=>string
    startTrail1():string
    getCoupon(couponname:string,value:number):number
}


interface Prashant{
    githubToken:string
}
interface AdminBhai extends Prashant
{
    role:"admin"|"ta"|"learners"
}
const hitesh:AdminBhai={dbId:22,email:"kdfnn",userId:22211,startTrail:()=>{
    return "tail sarted"
},startTrail1:()=>
{
   return "sdfkjgbkjgbkj" 
},getCoupon:(name:"prashant",off:10)=>
{
    return 10;
},githubToken:"github",
role:"ta"}