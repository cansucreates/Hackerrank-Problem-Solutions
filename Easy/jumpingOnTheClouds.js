// c = array of clouds // 0 cumulus 1 thunderstorm (-2)
// k = length of a jump costs -1 everytime
// energy = 100;
// find how much energy left when u reach 0
// example: c = [0,0,1,0,0,1,1,0]
// k = 2. just cause k=2 we jump from c[0] to c[2]. 
// c[2] = 1 (thunderhead) 100-1-2 = 97.
// jump from c[2] to c[4].
// c[4] = 0. (cumulus) 97 - 1 = 96
// jump from c[4] to c[6].
// c[6] = 1 (thunderhead) 96 - 1 - 2 = 93.
// jump from c[6] to c[8] (does not exist). we are on c[0]. which is cumulus
// c[0] = 0 (cumulus). 93 - 1 = 92 energy left.

function jumpingOnTheClouds(c, k) {
    let energy = 100;
    let i = 0;

    do {
        if (c[i] === 0) {
            energy--;
        } else {
            energy -= 3;
        }

        i = (i + k) % c.length;
    } while (i !== 0);

    return energy;
}