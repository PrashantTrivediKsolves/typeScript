"use strict";
let score = 33;
score = 44;
score = "55";
let prashant = {
    name: "hitesh",
    id: 334
};
prashant = {
    username: "hc",
    id: 34
};
// function getDbId(id:number|string)
// {
//     // making some API calls
//     console.log(`Db id is:${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
const data = [1, 2, 3];
const data1 = ["1", "2", "3"];
// const data2:string[]|number[]=["1","2","3"];
const data2 = ["1", "2", 3];
const data3 = ["1", "2", 3];
