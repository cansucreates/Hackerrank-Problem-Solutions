// Problem: The Utopian Tree goes through 2 cycles of 
// growth every year. Each spring, it doubles in height. 
// Each summer, its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter 
// is planted at the onset of spring. 
// How tall will the tree be after  growth cycles?

// pseudo code:
// height 1 ile başlıyo springte dikiliyor
// n 0'da güncel boy 1.
// n 1'de Spring iki katını al. güncel boy = 2.
// n 2'de Yaz +1 ekle. güncel boy = 3.
// n 3'de Spring iki katı. güncel boy = 6.
// n 4'de Yaz +1 ekle. güncel boy = 7.
// n 5'de Spring iki katı. güncel boy = 14.
// // use ternary operation to check if n is even or odd
function utopianTree(n) {
    let height = 1;
    for (let i = 0; i < n; i++) {
        height = i % 2 === 0 ? height * 2 : height + 1;
    }
    return height;
}