var  num:number = 5
//simple if
if (num > 0) { 
   console.log("number is positive") 
}

//if else
var no:number = 12; 
if (no % 2==0) { 
   console.log("Even"); 
} else {
   console.log("Odd"); 
}

//nested if or else if 
var num:number = 2 
if(num > 0) { 
   console.log(num+" is positive") 
} else if(num < 0) { 
   console.log(num+" is negative") 
} else { 
   console.log(num+" is neither positive nor negative") 
}

//switch case 
var grade:string = "A"; 
switch(grade) { 
   case "A": { 
      console.log("Excellent"); 
      break; 
   } 
   case "B": { 
      console.log("Good"); 
      break; 
   } 
   case "C": {
      console.log("Fair"); 
      break;    
   } 
   case "D": { 
      console.log("Poor"); 
      break; 
   }  
   default: { 
      console.log("Invalid choice"); 
      break;              
   } 
}