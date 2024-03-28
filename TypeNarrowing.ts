// Narrowing.....

function detectType(val:number|string)
{
    // return val.toLowerCase();
    if(typeof val==="string")
    {
        return val.toLowerCase();
    }
    return val+3;
}


function provideId(id:string|null)
{
    if(!id)
    {
        console.log("Please provide Id");
        return
    }
    id.toLowerCase();
}