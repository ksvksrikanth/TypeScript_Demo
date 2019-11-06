//type assertion : TypeScript allows changing a variable from one type to another. 
var str = '1'; 
var str2:number = <number> <any> str;  //str is now of type number 
console.log(str2);

var num = 2;    // data type inferred as  number 
console.log("value of num "+num); 