//variables
var a: number;
var b: boolean;
var c: string;
a = 10;
b = true;
c = "Hello";
//array
var myArr : number[];
myArr = [1, 2, 3];
myArr.push(4);
a = myArr.pop(); 

//tuple
var myArr1 : [number, boolean];
myArr1 = [1, true];
myArr1 = [100, false];

//implicit typing - assignment in same line for variable declaration
var n1 = 10;
var n2 = true;
var txt = "Hello";

//function declaration with implicit typing 
function greet() : string {
    return "Good Morning";
}
var greeting = greet();

var greeting1;
greeting1 = greet();  //greeting1 now takes the type as 'any'
//greeting1 can be assigned with any value
greeting1 = 10; // no error

var a1; //a1 is of type any - without any assignment or declaration

a1 = 10;
a1 = true;
a1 = "Hello"; // no restriction - accept any value 

//Union Type - using pipe symbol
var a2 : number | boolean | string;

a2 = 100;
a2 = false;
a2 = "xyz"; 

