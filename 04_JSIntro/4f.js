function isPrime(number){
    if (number === 1) {
       return "1 is neither prime nor composite number.";
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}

var number1 =7 ;
var number2 =15 ;
console.log("Is "+ number1+ " a prime number ? "  + isPrime(number1));
console.log("Is "+ number2+ " a prime number ? "  + isPrime(number2));