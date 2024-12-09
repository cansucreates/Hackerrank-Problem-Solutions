// Given a set of distinct integers, print the size of a maximal subset of S where the sum of any 2 numbers in S' is not evenly divisible by k.

function nonDivisibleSubset(k, s) {
    // her kalanı saymak için array oluştur
    let remainders = new Array(k).fill(0);

    // her sayının kalanını hesaplayıp say
    for (let sayi of s) {
        remainders[sayi%k]++; // kalanı her defasında arttır.
    }

    let max = 0;

    // eğer kalan 0 ise
    if (remainders[0] > 0) {
        max = 1;
    }

    // kalanları k'nın yarısı kadar check et tamamlayacıları ile karşılaştır için.
    for (let i = 1; i <= k/2; i ++ ) {
        // normal durumlar için
        if (i !== k-i) {
            max += Math.max(remainders[i], remainders[k-i]);
        }
        else {
            // eğer i === k-i ise 
            if (remainders[i] > 0) 
            {
                max += 1;
            }
            
        }

    }
    return max;
}
