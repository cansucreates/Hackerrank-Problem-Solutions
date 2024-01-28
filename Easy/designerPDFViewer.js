// PROBLEM: When a contiguous block of text is selected in a PDF viewer,
// the selection is highlighted with a blue rectangle.
// In this PDF viewer, each word is highlighted independently.

// There is a list of  26 character heights aligned 
// by index to their letters. For example, 'a' is at  0 index 
// and 'z' is at 25 index . 
// There will also be a string. Using the letter heights given,
// determine the area of the rectangle highlight in 
// square of mm assuming all letters are  1mm wide . 

// pseudo code: 
// find the letters heights from the array
// find the max letter value
// multiply the max value by the length of the given string
// return the result

function designerPdfViewer(h, word) {
    const findLettersHeight = (letter) => h[letter.charCodeAt(0) - 'a'.charCodeAt(0)];

    let maxHeight = 0;
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        const height = findLettersHeight(letter);
        maxHeight = Math.max(maxHeight, height);
    }

    const totalArea = maxHeight * word.length;

    return totalArea;
}
