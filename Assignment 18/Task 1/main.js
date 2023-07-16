let numbers = prompt("Print Number From-To", "Example: 15-20").split("-");
let i = Math.min.apply(null, numbers),
    n = Math.max.apply(null, numbers);
for (; i <= n; i++) {
    console.log(i);
}
/*
    ###########################################
        example 10-15
    ###########################################
    10
    11
    12
    13
    14
    15
    ###########################################
        example 20-10
    ###########################################
    10
    11
    12
    13
    14
    15
    16
    17
    18
    19
    20
*/
