//Problem Set 2
//Problem 2

//Generator is initialized with a sentence and emits each word of the sentence on a new line
function* words(sentence) {
    let thereAreWords = 0;
    const arr = sentence.split(' ');
    while (thereAreWords < arr.length) {
        yield arr[thereAreWords];
        thereAreWords++;
    }
}

//Create the generator with the following lyric
birdWirds = words('All I know is something like a bird within her sang');

//Print the words to the console
let n = 0;
while (n < 11) {
    console.log(birdWirds.next().value);
    n++;
}

