function cutTheSticks(arr) {
    let numberOfSticks = [];

    while (arr.length > 0) {
        let length = arr.length;
        numberOfSticks.push(length);

        let shortestStick = Math.min(...arr);

        arr = arr.map(stick => stick - shortestStick) // subtract the shortest stick from all sticks
            .filter(stick => stick > 0); // remove all sticks that are 0 or less
    }

    return numberOfSticks;
}

