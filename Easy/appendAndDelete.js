function appendAndDelete(s, t, k) {

    if(k >= (s.length + t.length)) return 'Yes' // if k is greater than the sum of the lengths of s and t, we can delete all of s and append all of t
    
    let i = 0 // count the number of characters that are the same in both strings
    while(s[i]==t[i] && i < s.length && i<t.length){
        i++
    }
    const rest = (s.length - i)+(t.length - i) // the number of characters that need to be deleted from s and appended to t
    if(k<rest) return 'No' // if k is less than the number of characters that need to be deleted and appended, we can't do it
    else if(rest === k || ((k - rest)%2)==0) return 'Yes' // if k is equal to the number of characters that need to be deleted and appended, or if k is even and greater than the number of characters that need to be deleted and appended, we can do it
    else return 'No' // 
}