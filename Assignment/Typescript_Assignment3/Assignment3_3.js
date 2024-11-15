"use strict";
// 3. Create one typescript application which contains one class named as CirclX which sill
//    inherits above Circle class.
//    In CircleX class we have to write one method (Behaviours) as Circumference which will return 
//    circumference of circle.
//    After designing the calss create two objects of that class by providing some hardcoded value.
//    Call Circumference and Area methods by using both the objects.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Assignment3_2_1 = require("./Assignment3_2"); // import circle class
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    // Characteristics
    function CircleX(radius, pi) {
        if (pi === void 0) { pi = 3.14; }
        return _super.call(this, radius, pi) || this; // call parent constructor
    }
    // Method to calculate circumference of circle
    CircleX.prototype.Circumference = function () {
        var ans = 0;
        ans = 2 * this.PI * this.Radius;
        return ans;
    };
    return CircleX;
}(Assignment3_2_1.Circle));
// creating objects
var Obj1 = new CircleX(10);
var Obj2 = new CircleX(15);
// Calling Methods
console.log("Obj1 : Radius = 10");
console.log("Area of Circle : ", Obj1.Area());
console.log("Circumference of Circle : ", Obj1.Circumference());
console.log("Obj2 : Radius = 14");
console.log("Area of Circle : ", Obj2.Area());
console.log("Circumference of Circle : ", Obj2.Circumference());
