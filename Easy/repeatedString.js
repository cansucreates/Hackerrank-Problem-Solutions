// There is a string s, of lowercase English letters that is repeated 
//infinitely many times. Given an integer n, find and print 
//the number of letter a's in the first n letters of the infinite string.

function repeatedString(s,n) {
    let count = 0;
    let aCount = 0;
    let aCountExtra = 0;
    let extra = n % s.length;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            aCount++;
            if (i < extra) {
                aCountExtra++;
            }
        }
    }
    count = Math.floor(n / s.length) * aCount + aCountExtra;
    return count;

}