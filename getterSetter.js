"use strict";
class UserPrashant1 {
    constructor(email, name, userid) {
        this.email = email;
        this.name = name;
        this.userid = userid;
        this._courseCount = 1;
        this.city = "kanpur";
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than one");
        }
        this._courseCount = courseNumber;
    }
    deleleToken() {
        console.log("Delete count");
    }
}
const prashantTr = new UserPrashant1("pk@gmail.com", "prashant", 3);
prashantTr.courseCount = 6;
console.log(prashantTr.courseCount);
