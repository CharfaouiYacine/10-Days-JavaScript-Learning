function modifyArray(nums) {
    let size =  nums.length
    for (var i=0;i<size;i++){
        if(nums[i]% 2 === 0){
            nums[i]=nums[i]*2
        }
        else{
            nums[i]=nums[i]*3
        }
    }
    return nums
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);

    console.log(modifyArray(a).toString().split(',').join(' '));
}



/*
Arrow functions :hey are primarily used to write shorter code and to solve
common scoping issues related to the 'this' keyword

Example:
let good = (a,b) => {console.log(`hey there your total is : ${a*b}`)}
good(2,4)

*/