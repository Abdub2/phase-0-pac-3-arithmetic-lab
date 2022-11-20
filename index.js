function add(a,b){
    const math= a+b;
    return math;
}
add(316,3);
function subtract(a,b){
    const math=a-b;
    return math;
}
subtract(500,60)
function multiply(a,b){
    const math=a*b;
    return math;
}
multiply(50,2)
function divide(a,b){
    const math=a/b;
    return math;
}
divide(40,5);
function increment(n){
    return (++n);
}
increment(5);

function decrement(n){
    return(--n);
}
decrement (7)
function makeInt(String){
    return parseInt(String);

}
makeInt(56);
console.log(parseInt(makeInt("56")));

function preserveDecimal(string){
    return parseFloat(string);
}
preserveDecimal(50.34);
console.log (parseFloat(preserveDecimal("50.34")));


