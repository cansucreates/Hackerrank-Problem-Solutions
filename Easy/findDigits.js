// pseudo code: 
    // result = 0;
    // convert n's digits to string then put in an array as numbers
    // iterate through number's digit array
    // check if n % array[i] === 0;
    // if it is equal to 0 then add result +1.
    // if its not go for the other member
    // return result;

    function findDigits(n) {

        let result = 0;
        let digits = Array.from(String(n), Number);
        
        for (let i = 0; i < digits.length; i++) {
            if(n % digits[i] === 0) {
                result += 1;
            }
        }
        return result;
    }    