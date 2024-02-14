// Link: https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) {
    let result = [];
    for (let i = 1; i <= p.length; i++) {
        let index = p.indexOf(i) + 1; // find index of x = i
        let index2 = p.indexOf(index); // find index of y = p(x)
        result.push(index2 + 1); // add 1 to get y
    }
    return result;
}