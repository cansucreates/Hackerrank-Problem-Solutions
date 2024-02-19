function extraLongFactorials(n) {

    let factorial = 1n
    for(let i = n; i > 1; i--){
        factorial *= BigInt(i) // BigInt is used to handle large numbers
    }
    console.log(factorial.toString()) // toString is used to convert the BigInt to string
}