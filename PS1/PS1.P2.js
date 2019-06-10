//Problem Set 1
//Problem 2

//Takes string expression and returns a function to implement the expression
const evaluate = expr => returnFun([...expr]);

const returnFun = function(array) {
    let op = array[1];
    if (op == '+') {
        function a(expr) {
            return Number([...expr][0]) + Number([...expr][2])
        }
        return a;
    }
    else if (op == '*') {
        function b(expr) {
            return [...expr][0] * [...expr][2]
        }
        return b;
    }
    else if (op == '-') {
        function c(expr) {
            return [...expr][0] - [...expr][2]
        }
        return c;
    }
    else {
        function d(expr) {
            return [...expr][0] / [...expr][2]
        }
        return d;
    }
}

//The expressions
const plus = '4+2';
const mult = '5*7';
const sub = '6-1';
const div = '9/2';

//The operations
let op1 = evaluate(plus);
let op2 = evaluate(mult);
let op3 = evaluate(sub);
let op4 = evaluate(div);

//Print the implementations of the operations
console.log(`${plus} = ${op1(plus)}`);
console.log(`${mult} = ${op2(mult)}`);
console.log(`${sub} = ${op3(sub)}`);
console.log(`${div} = ${op4(div)}`);