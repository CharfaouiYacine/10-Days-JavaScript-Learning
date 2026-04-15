function reverseString(s) {
    try{
        var result = s.split("")
        result = result.reverse()
        result = result.join("")
        console.log(result)
    }
    catch(error){
        console.log(error.message)
        console.log(s)
    }
}


function main() {
    const s = eval(readLine());

    reverseString(s);
}