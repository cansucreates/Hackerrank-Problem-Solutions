
// A Magic Square is a n x n matrix of distinct element from 
//1 to n2 where the sum of any row, column or diagonal is always equal to same number. 
// Consider a 3 X 3 matrix, s, of integers in the inclusive range [1, 9] .
// We can convert any digit, a, to any other digit, b, in the range [1, 9] at cost |a – b|. 
// Given s, convert it into a magic square at minimal cost by
// changing zero or more of its digits. The task is to find minimum cost. 

function formingMagicSquare(s){
    let cost = Infinity;

    // all possible 3x3 magic squares
    const magicSquares = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]],
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]],
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]],
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]]
    ];

    // the cost for each magic square
    for (let square of magicSquares) {
        let currentCost = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                currentCost += Math.abs(s[i][j] - square[i][j]);
            }
        }
        cost = Math.min(cost, currentCost);
    }

    return cost;
}

   