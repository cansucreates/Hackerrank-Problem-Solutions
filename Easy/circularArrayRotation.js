/* John Watson knows of an operation called a right circular 
rotation on an array of integers. One rotation operation moves 
the last array element to the first position and shifts 
all remaining elements right one. To test Sherlock's abilities,
Watson provides Sherlock with an array of integers. 
Sherlock is to perform the rotation operation a number of times then determine the value 
of the element at a given position.

For each array, perform a number of right circular rotations and 
return the values of the elements at the given indices. */

function circularArrayRotation(a, k, queries) {
    k %= a.length; // handling rotations larger than the array length
    
    // remove the last element and add it to the front
    for(let i = 0; i < k; i++) {
        const lastElement = a.pop();
        a.unshift(lastElement);
    }
    
    let result = [];
    
    // checking query index's values from a and add them to the result array
    for(let j =  0; j < queries.length; j++) {
        result.push(a[queries[j]]);
    }
    
    return result;
  
   
  }