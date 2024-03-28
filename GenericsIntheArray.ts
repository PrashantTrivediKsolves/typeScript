// function getSearchProducts<T>(products:T[]):T
// {
//     // do some database operation 
//     return products[2];
// }




const getMoreSearchProducts = <T,>(products:T[]):T=>{
    // do some database operation
    return products[3];
}


// very important
// interface Database
// {
//     connction:string,
//     username:string,
//     password:string
// }

// function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
//     return {
//         valOne,
//         valTwo
//     }
// }

// anotherFunction(3,{})


interface Quiz{
    nae:string,
    type:string
}
interface Course{
    name:string,
    author:string,
    subject:string
}
class Sellable<T>{
    public cart:T[]=[]

    addToCart(products:T){
        this.cart.push(products)
    }
}