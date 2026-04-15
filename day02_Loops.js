function vowelsAndConsonants(s) {
    let size = s.length
    for(var i=0;i<size;i++){
        if(["a","e","i","o","u"].includes(s[i])){
            console.log(s[i])
        }
    }
    for(var i=0;i<size;i++){
        if(!(["a","e","i","o","u"].includes(s[i]))){
            console.log(s[i])
        }
    }
}


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}