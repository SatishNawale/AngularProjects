// 3. Create one typescript application which contains one class named as CirclX which sill
//    inherits above Circle class.
//    In CircleX class we have to write one method (Behaviours) as Circumference which will return 
//    circumference of circle.
//    After designing the calss create two objects of that class by providing some hardcoded value.
//    Call Circumference and Area methods by using both the objects.

import {Circle} from "./Assignment3_2"  // import circle class

class CircleX extends Circle
{
    // Characteristics
    constructor(radius: number, pi : number = 3.14)
    {
        super(radius,pi); // call parent constructor
    }

    // Method to calculate circumference of circle
    Circumference() : number
    {
        var ans : number = 0;
        ans = 2 * this.PI * this.Radius;
        return ans
    }
}

// creating objects
var Obj1 = new CircleX(10);
var Obj2 = new CircleX(15);

// Calling Methods
console.log("Obj1 : Radius = 10");
console.log("Area of Circle : ",Obj1.Area());
console.log("Circumference of Circle : ",Obj1.Circumference());

console.log("Obj2 : Radius = 14");
console.log("Area of Circle : ", Obj2.Area());
console.log("Circumference of Circle : ", Obj2.Circumference());
