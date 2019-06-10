//Problem Set 2
//Problem 1

//First generator returns the series of Fibonacci numbers starting from zero
function* fibs () {
    let [val1, val2, result] = [0, 1, 0]
    yield val1;
    yield  val2;
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}
//Second generator uses the first's sequence, but outputs only those that are even
//Limits the sequence to the first 5 even numbers, per request of the problem
function* evenFibs () {
    myFibs = fibs();
    let i = 0;
    while (i < 5) {
        let val = myFibs.next().value;
        if (val % 2 == 0) {
            i++;
            yield val;
        }
    }
}
//Prints first 5 even Fibonacci numbers
console.log('First 5 even fibs:');
console.log(...evenFibs());