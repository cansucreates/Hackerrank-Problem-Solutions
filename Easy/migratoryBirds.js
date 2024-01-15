function migratoryBirds(arr) {
  // iterate through array and
  // find the repeated numbers
  // and add them into count object

  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    // first ocurrence of the bird type
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = 1;
    } else {
      // bird type already encountered
      counts[arr[i]]++;
    }
  }

  // find the most repeated number
  let maxCount = Math.max(...Object.values(counts));

  // to ensure that any bird type id encountered
  // will be smaller than the smallestId
  let smallestId = Number.MAX_SAFE_INTEGER;

  // iterate through the object and
  // find the smallest id with the max count
  for (let id in counts) {
    if (counts[id] === maxCount && parseInt(id) < smallestId) {
      smallestId = parseInt(id);
    }
  }

  return smallestId;
}
