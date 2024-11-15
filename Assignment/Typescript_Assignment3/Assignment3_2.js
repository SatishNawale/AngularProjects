"use strict";
// 2. Create one typescript application which contains one class named as Circle.
//    Circle class contains two characteristics(Class data members) as Radius, PI.
//    Create one parametrised constructor which accept one value and assign it to Radius. Value of PI 
//    PI member is set to 3.14.
//    In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
//    After designing the class create two objects of that class by providing some hardcoded value
//    Call the method Area by using both the objects.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    // Parametrised Constructor
    function Circle(radius, pi) {
        if (pi === void 0) { pi = 3.14; }
        this.Radius = radius;
        this.PI = pi;
    }
    // Method to calculate Area of circle
    Circle.prototype.Area = function () {
        var Ans = 0;
        Ans = this.Radius * this.Radius * this.PI;
        return Ans;
    };
    return Circle;
}());
exports.Circle = Circle;
// creating objects
var obj1 = new Circle(5);
var obj2 = new Circle(7, 3.14159);
//Calling method Area for objects;
console.log("Obj1 : Radius = 5, Area of Circle :  ", obj1.Area());
console.log("Obj1 : Radius = 7, Area of Circle :  ", obj2.Area());
