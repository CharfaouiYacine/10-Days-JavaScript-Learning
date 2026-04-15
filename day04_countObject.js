function getCount(objects) {
    var count = 0;
    var size = objects.length
    for(var i =0;i<size;i++){
        if(objects[i].x === objects[i].y){
            count = count + 1
        }
    }
    return count
}


function main() {
    const n = +(readLine());
    let objects = [];

    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');

        objects.push({x: +(a), y: +(b)});
    }

    console.log(getCount(objects));
}