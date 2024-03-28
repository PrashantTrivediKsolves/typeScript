let score:number|string=33

score=44

score="55"

type User1={
    name:string;
    id:number
}
type Admin={
    username:string;
    id:number
}


let prashant:User1|Admin={
    name:"hitesh",
    id:334
}

prashant={
    username:"hc",
    id:34
}

// function getDbId(id:number|string)
// {
//     // making some API calls
//     console.log(`Db id is:${id}`);
// }

getDbId(3)

getDbId("3")

function getDbId(id:number|string)
{
    if(typeof id==="string")
    {
        id.toLowerCase();
    }
    else{
        id+2
    }
}

const data:number[]=[1,2,3]

const data1:string[]=["1","2","3"]

// const data2:string[]|number[]=["1","2","3"];

const data2:(string|number)[]=["1","2",3];

const data3:any[]=["1","2",3];


let pi:3.14=3.14



let seatAllotment:"asile"|"middle"|"window|"

seatAllotment="asile"

//seatAllotment="pr"  it will give an error




