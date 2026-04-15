function getSecondLargest(nums) {
    var large = nums[0];
    var large2 = nums[0];
    var size = nums.length
    for(var i=0;i<size;i++){
        if(nums[i]>large){
            large2 = large
            large = nums[i]
        }
        else if(nums[i]>large2 && nums[i]<large){
            large2 = nums[i]
        }
    }
    return large2
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);

    console.log(getSecondLargest(nums));
}