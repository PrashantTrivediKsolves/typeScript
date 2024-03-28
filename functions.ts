function addTwo(num:number)
{
    return num+2;
}


//
function getUpper(val:String):String
{
    return val.toUpperCase();
}
let ans:String=getUpper("prashant");
console.log(ans);


function signUpUser(name:String,email:String,password:String,isPaid:boolean)
{

}

let loginUser=(name:String,email:String,ispaid:boolean=false)=>{}
loginUser("surendra","anfnf");

signUpUser("pashant","pk80480@gmail.com","12345",true);

addTwo(5);


// function getValue(mayval:number)
// {
//     if(my)

// }

const getHello=(s:string):string=>{
    return ""
}

// const heros=["thor","spiderman","ironman"]
// const heros=["thor","spiderman","ironman"]

// heros.map((hero):String=>
//     {
//         return `hero is ${hero}`
//     })



// function consoleError(errmsg:string):void
// {
//     console.log(errmsg);
//     return 
// }

function handleError(errmsg:string):never{
    throw new Error(errmsg);
}
export {}