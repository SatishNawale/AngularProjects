// 1. Create one typescript application which contains one class named as Arithmetic.
//    Arithmetic class contains three characteristics (Class dat amembers) as Number1, Number2.
//    Create one parametrised constructor which accept two values and assignn it to Number1 and 
//    Number2. In Arithmetic class we have to write four methods(Behaviours) as Addition, Substraction,
//    Multiplication and Division. Addition method will add Number1, Number2, & return result.
//    Substraction method will substract Number1, Number2 & return result.
//    Multiplication method will multipy Number1, Number2 & return result.
//    Divisin method will divide Number1, Number2 & return result.
//    After designing the class create two objects of that class by providing some Hardcoded value.
//    Call all the methods by using both tghe objects.

class Arithmetic
{
    Number1 : number;
    Number2 : number;

    // Parametrised constructor
    constructor(Value1 : number, Value2 : number)
    {
        this.Number1 = Value1;
        this.Number2 = Value2;
    }

    // Method to add Number1 & Number2
    Addition(): number
    {
        return this.Number1 + this.Number2;
    }

    // Method to subtract Number2 from Number1
    Subtraction(): number
    {
        return this.Number2 - this.Number1;
    }

    // Method to multiply Number1 & Number2
    Multiplication(): number
    {
        return this.Number1 * this.Number2;
    }

    // Method to Divide Number1 by Number2
    Division(): number
    {
        if(this.Number2 === 0) 
        {
            console.log("Error: Dvi")
        }
        return this.Number1 / this.Number2;
    }
}


// Creating Objects
var Obj1 = new Arithmetic(10,20);
var Obj2 = new Arithmetic(11,12);

console.log("Obj1 :- Number1 = 10, Number2 = 20");
console.log("Addition : ",Obj1.Addition());
console.log("Subtraction : ",Obj1.Subtraction());
console.log("Multiplication : ",Obj1.Multiplication());
console.log("Division : ",Obj1.Division());
console.log();
console.log("Obj2 :- Number1 = 11, Number2 = 12");
console.log("Addition : ",Obj2.Addition());
console.log("Subtraction : ",Obj2.Subtraction());
console.log("Multiplication : ",Obj2.Multiplication());
console.log("Division : ",Obj2.Division());