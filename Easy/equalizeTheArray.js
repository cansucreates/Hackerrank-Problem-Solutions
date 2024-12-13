// give an array of integers determine the min number of elements to delete to leave only
// elemetns of equal value.

function equalizeArray(arr) {

    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentCount = 0;

        for (let j = 0; j< arr.length; j++) {
            if(arr[i] === arr[j]) {
                currentCount++;
            }
        }

        if(currentCount > maxCount) {
            maxCount = currentCount;
        }

    }

    return arr.length - maxCount;


}