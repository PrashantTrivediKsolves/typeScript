// class UserPrashant{
//     public email:string
//     private name:string
//     readonly city:string="kanpur"

//     constructor(email:string,name:string)
//     {
//         this.email=email;
//         this.name=name;
//     }
// }
// const prashantT=new UserPrashant("pk@gmail.com","prashant")


class UserPrashant{
        readonly city:string="kanpur"
        constructor
        (public email:string,
         public name:string,
         private userid:number
        )
        {
            
        }
    }
    const prashantT=new UserPrashant("pk@gmail.com","prashant",3)
    


