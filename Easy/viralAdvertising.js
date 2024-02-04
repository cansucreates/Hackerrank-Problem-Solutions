// 5 people at first
// first day floor(5/2) = 2 likes
// second day floor(2*3/2) = 3 likes
// third day floor(3*3/2) = 4 likes
// fourth day floor(4*3/2) = 6 likes
// ... and so on

function viralAdvertising(n) {
    let shared = 5;
    let liked = 0;
    let cumulative = 0;
    for (let i = 0; i < n; i++) {
        liked = Math.floor(shared/2);
        cumulative += liked;
        shared = liked * 3;
    }
    return cumulative;
}