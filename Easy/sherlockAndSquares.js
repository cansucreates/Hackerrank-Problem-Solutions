// Watson likes to challenge Sherlock's math ability.
//  He will provide a starting and ending value that describe a range of integers, 
// inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

function squares(a, b) {
    let count = 0;
    let i = 1;
    while (i * i <= b) {
        if (i * i >= a) {
            count++;
        }
        i++;
    }
    return count;
}