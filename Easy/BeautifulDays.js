function beautifulDays(i,j,k) {

//the reverser function
function reverseNumber(num) {
    let strNum = num.toString();
    let reversed = strNum.split("").reverse().join("");
    return parseInt(reversed);
}

// for to find the numbers between i and j
function arrayRange(i,j) {
    let arr = [];
    for (let x = i; x <= j; x++) {
        arr.push(x);
    }
    return arr; }

 let beautifulDaysCounter = 0;
 let theDays = arrayRange(i,j);

 for(let i = 0; i < theDays.length; i++) {
     if((theDays[i] - reverseNumber(theDays[i])) % k === 0) {
         beautifulDaysCounter++;
     }
 }

    return beautifulDaysCounter;

}
