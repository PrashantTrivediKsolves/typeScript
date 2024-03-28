class UserPrashant1{
    protected _courseCount=1
    readonly city:string="kanpur"
    constructor
    (public email:string,
     public name:string,
     private userid:number
    )
    {  
    }
    get getAppleEmail():string
    {
        return `apple ${this.email}`
    }
    get courseCount():number{
        return this._courseCount;
    }
    set courseCount(courseNumber)
    {
        if(courseNumber<=1)
        {
            throw new Error("Course count should be more than one")
        }
        this._courseCount=courseNumber;
    }
    private deleleToken()
    {
        console.log("Delete count");
    }
}

class subUser extends UserPrashant1
{
    isFamily:boolean=true;
    changeCourseCount()
    {
        this._courseCount=4;
    }
}
const prashantTr=new UserPrashant1("pk@gmail.com","prashant",3)

prashantTr.courseCount=6;

console.log(prashantTr.courseCount);




