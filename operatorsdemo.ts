//negation operator -
var x:number = 4 
var y = -x; 
console.log("value of x: ",x);   //outputs 4 
console.log("value of y: ",y);   //outputs -4

//string concatenation operator +
var msg:string = "hello"+"world" 
console.log(msg)

//conditional operator
var num:number = -2 
var result = num > 0 ?"positive":"non-positive" 
console.log(result)

//typeof operator
var num = 12 
console.log(typeof num);

//Typing with functions with return type
function add(a : number, b : number) : number {
    return a + b;
}
var sum = add(5, 2);
console.log(sum);

//function with default arguments or optional argument 'argname?'
function sum1(a, b, c = 0) {
    return a + b + c;
}
var s = sum1(1, 2, 3);
var t = sum1(6, 4);
console.log(s);
console.log(t);