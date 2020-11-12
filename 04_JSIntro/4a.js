//function expression
var functionRecursive=function fac(x) 
{ 
  if (x === 0)
 {   
     return 1;
 }
  return x * fac(x-1);         
}
//function declaration
 function factorialIterative(n) {
    if(n === 0) {
        return 1;
    } else {
        product = 1;
        for(i = 1; i <= n; i++) {
            product *= i;
        }
        return product;
    }
}

console.log("Recursive Factorial : " +functionRecursive(5));

console.log("Iterative Factorial : " +factorialIterative(5));