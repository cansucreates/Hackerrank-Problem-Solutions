// we have a book 
// n = number of pages
// p = the page we want to reach
// the first page (1) always on the right side on the beginning
// the last page may only be printed on the front depending on the length of the book
// find the minimum number of pages to turn to the right from the beginning
// and from the end

function pageCount(n, p) {
   // calculating the total number of pages to turn from beginning
   let totalFromStart = Math.floor(p/2);
   // calculating the total pages to turn flip from the end
   let totalFromEnd = Math.floor((n/2) - Math.floor(p/2));
   return Math.min(totalFromStart, totalFromEnd);
};