// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with 
// a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. 
// If it is not possible to buy both items, return -1

// pseudo code

// create array of the sums of keyboard and usb less than the budget
// iterate through keyboard prices
// iterate through usb drive prices
// sum of the each kb price and usb drive price
// if the sum is less than or equal than the budget
// add it to the created array
// then return the max value from the array
// else return -1

function getMoneySpent(keyboards, drives, b) {
    let sums = [];
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] <= b) {
                sums.push(keyboards[i] + drives[j]);
            }
        }
    }
    if (sums.length > 0) {
        return Math.max(...sums);
    } else {
        return -1;
    }
    
}