//@ts-ignore
// console.log("I am prashat");


// function sum(a:number,b:number):number{
//     return a+b;
// }

// const sum=(a:number,b:number):number=>
// {
//     return a+b;
// }

// console.log(sum(5,6));
// let num:number=5;

// num=8;

// console.log(num);

const greet3=(name:string,id:number=1):string=>{
    return `Welcome ,${name} and your id is ${id}`
}

const emp=greet3("vinod")

console.log(emp);