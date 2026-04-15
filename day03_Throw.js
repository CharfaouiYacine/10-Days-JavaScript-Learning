function isPositive(a) {
    if(a>0){
        return "YES"
    }else if(a==0){
        throw new Error("Zero Error")
    }else{
        throw new Error("Negative Error")
        // it's good if we use new Error with throw as good practice (clean code)
    }
}


function main() {
    const n = +(readLine());

    for (let i = 0; i < n; i++) {
        const a = +(readLine());

        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}