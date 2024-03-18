// Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S' is not evenly divisible by k.


function nonDivisibleSubset(k, s) {
    let count = Array(k).fill(0);
    s.forEach(num => {
        count[num % k]++;
    });
    
    let result = Math.min(count[0], 1);
    for (let i = 1; i <= k / 2; i++) {
        if (i !== k - i) {
            result += Math.max(count[i], count[k - i]);
        }
    }
    
    if (k % 2 === 0) {
        result++;
    }
    
    return result;

}
