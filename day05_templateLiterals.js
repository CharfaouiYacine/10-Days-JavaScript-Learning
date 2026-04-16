function sides(literals, ...expressions) {
    const a = expressions[0]
    const p = expressions[1]
    const s1 = (p + (p*p-16*a)**(1/2))/4
    const s2 = (p - (p*p-16*a)**(1/2))/4
    let arr = [s1,s2].sort()

    return arr
}


function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());

    [s1, s2] = [s1, s2].sort();

    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}

/*
What are template literals:  they are a way to write a string using ``(backticks)
they help us inset values without using concatenation `hi there ${name}` or write multi line string without \n , and even write calculations inside

Tagged Template literals : u can process a template using a function EX:

function  fouad(string,...values){
    console.log(values) output = [47]
    console.log(string) output = [ 'hello there agent ', '' ]
// the first parameter (string) is for the string itself
// and the second one values is for the values inside
}
let value = 47
let Yacine =fouad`hello there agent ${value}`

 */