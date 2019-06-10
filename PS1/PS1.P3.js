//Problem Set 1
//Problem 3

//Takes a string and a function, and returns the execution of that function with the string parameter
const executeFunction = (a, b) => (b(a));

//Breaks a string into fragments broken on the letter c
const breakAtC = string => string.split(/(?=c)/g);

//Replaces a's with A's and returns an object specifying the original string,
//the modified string, the number of a's replaced and the length of the string
const capA = string => replAce(string);
const replAce = function(word) {
    var obj =
    {
        originalString: word,
        modifiedString: word.replace(/a/g, 'A'),
        numberReplaced: word.split('a').length - 1,
        length: word.length
    }
    return obj;
}

//Print Statements
console.log(executeFunction('supercalifragilisticexpialidocious', breakAtC));
console.log(executeFunction('supercalifragilisticexpialidocious', capA));