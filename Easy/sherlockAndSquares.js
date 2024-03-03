// Watson likes to challenge Sherlock's math ability.
//  He will provide a starting and ending value that describe a range of integers, 
// inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

function squares(a,b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            count++
        }
    }
    return count;
}