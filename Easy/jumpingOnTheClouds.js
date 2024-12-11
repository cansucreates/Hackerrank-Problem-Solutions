// we have a n number of arrays where they either
// 1(thunderstorm) or 0(cumulus)
// return the shortest way
// ps: player can jump max 2 cloud.


function jumpingOnClouds(c) {
    let jumpCount = 0;
    let currentPosition = 0;

    // if we can jump two position
    while (currentPosition < c.length - 1) {
        if (currentPosition + 2 < c.length && c[currentPosition + 2] === 0) {
            currentPosition += 2;
            jumpCount++;
        }
        else {
            currentPosition += 1; 
            jumpCount++;
        }
    }
    return jumpCount;

}


