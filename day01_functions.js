/*
 * Create the function factorial here
 */
function factorial(m){
    var fact = 1;
    for(var i =1;i<=m;i++){
        fact = fact * i
    }
    return fact
}

function main() {
    const n = +(readLine());

    console.log(factorial(n));
}