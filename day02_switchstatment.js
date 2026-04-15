function getLetter(s) {
    let letter;
    let letr = s[0]
    let achoice = ['a','e','i','o','u'].includes(letr)
    let bchoice = ['b','c','d','f','g'].includes(letr)
    let cchoice = ['h','j','k','l','m'].includes(letr)
    let dchoice = ['n','p','q','r','s','t','v','w','x','y','z'].includes(letr)
    switch(true){
        case achoice:
            letter ="A";
            break;
        case bchoice:
            letter ="B"
            break;
        case cchoice:
            letter ="C"
            break;
        case dchoice:
            letter ="D"
            break;
    }
    return letter;
}


function main() {
    const s = readLine();

    console.log(getLetter(s));
}