let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    First:-
        [++a]
        - Value: 11
        - Explain: pre incrment
        [+]
        - Explain: Addition Operator
        [+b++]
        Value: 21
        Explain: post incrment
        [+]
        - Explain: Addition Operator
        [+c++]
        Value: 81
        Explain: post incrment
        [-]
        - Explain: Subtract Operator
        [+a++]
        Value: 12
        Explain: post incrment
        [total] 
        Value: 100
*/
/*
    second:-
        [++a]
        - Value: 13
        - Explain: pre incrment
        [+]
        - Explain: Addition Operator
        [-b]
        Value: -21
        Explain: unary nagtion
        [+]
        - Explain: Addition Operator
        [+c++]
        Value: 82
        Explain: post incrment
        [-]
        - Explain: Subtract Operator
        [-a++]
        Value: -14
        Explain: post incrment
        [+]
        - Explain: Addition Operator
        [+a]
        Value: 14
        Explain: a value is 14
        [total] 
        Value: 100
*/
/*
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
    Third:-
        [--c]
        - Value: 81
        - Explain: pre sub
        [+]
        - Explain: Addition Operator
        [+b]
        Value: 21
        Explain: unary plus
        [+]
        - Explain: Addition Operator
        [--a]
        Value: 13
        Explain: pre sub
        [*]
        - Explain: multiple Operator
        [+b++]
        Value: 22
        Explain: post incrment
        [-]
        - Explain: Subtract Operator
        [+b]
        Value: 22
        Explain: unary plus
        [*]
        - Explain: multiple Operator
        [a]
        Value: 13 
        Explain: a value is 13
        [+]
        - Explain: multiple Operator
        [--a]
        Value: 12
        Explain: pre sub
        [-]
        - Explain: subtract Operator
        [true]
        Value: 1
        Explain: true value is number 1
        [total] 
        Value: 100
*/
