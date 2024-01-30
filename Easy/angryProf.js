    // let arrivedCount
    // check students arrival times iterating on a
    // if arrivaltime <= 0 add arrivedCount
    // check if arrivedCount > threshold(k)
    // if true return "NO" prof not angy
    // else return "YES" prof is angy

function angryProfessor(k, a) {

    let onTime = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            onTime++;
        }
    }
    if (onTime >= k) {
        return 'NO';
    } else {
        return 'YES';
    }
}