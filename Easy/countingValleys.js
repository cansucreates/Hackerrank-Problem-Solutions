// steps = steps
// if its an uphill step = U
// if the steps is downhill = D
// mountain starts with a step up from sea level, ends with a step down from sea level
// valley starts with a step down from sea level, ends with a step up from sea level
// count the number of valleys

/// pseudo code
// we start with sea level = 0
// we iterate through array of steps to check if its U or if its D
// if its D means that its a down steps and decrease the current val one step else increase
// if its U and equal to the sea level in every step, add count +, because its a valley
// do  that till the end to count the valley


function countingValleys(steps, path) {
    const seaLevel = 0;
    let count = 0;
    let currentPlace = seaLevel;

    for (let i = 0; i < steps; i++) {
        if (path[i] === "D") {
            currentPlace--;
        } else {
            currentPlace++;
        }

        if (path[i] === "U" && currentPlace === seaLevel) {
            count++;
        }
    }

    return count;
}
