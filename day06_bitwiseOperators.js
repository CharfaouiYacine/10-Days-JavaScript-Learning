function getMaxLessThanK(x, y){
    let max = 0;
    let val
    for(var i=1 ; i<x ; i++){
        for(var j=i+1 ; j<=x ; j++){
            val = i & j
            if((val>max)&&(val < y)){
                max = val;
            }
        }
    }
    return max
}



function main() {
    const q = +(readLine());

    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);

        console.log(getMaxLessThanK(n, k));
    }
}
/*
Bitwise operators: these operators are used on the bits unlike logical operators that are used on boolean expressions

AND &:  5(101) & 3(011) = 001 (1)
OR |:  5 | 3 = 111(7)
XOR ^:  5 ^ 3 = 110(6)
NOT ~: ~5 = -6 ( JS uses the 32bit signed integers ) for easy calculation use:  ~x =-(x+1)
LEFT SHIFT << : move bits to the left (ADDS zeros) 5 << 1 = 10 (1 means move one bit to the left , if we put 2 we will get  20)
RIGHT SHIFT >> : move bits to the right :  5 >> 1 = 2 ( if we put 2 instead of  1 we will get  1)
 */