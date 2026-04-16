class Polygon{
    constructor(len_sides){
        this.len_sides =len_sides
    }
    perimeter(){
        var size = (this.len_sides).length
        var peri = 0
        for(var i=0;i<size;i++){
            peri += this.len_sides[i];
        }
        return peri
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());

/*
Classes Is a structured way to create objects
---KeyWords For creating a class

class class_name{  creating a class
    constructor(name1,name2...){
        A method that runs automatically when creating a new object with these parameters
        this.name1 = name1
        this.name2 = name2 => 'this': refers to the object being created (to assign values)
    }
    method_name(){
    create a method that does anything (can't use the parameters name directly you have to use the "this" keyword)
    }

}
bind() can uses this to fix 'this' permanently ex: let f = p1.attack().bind(p1)
Detached function => functions called alone : let f = class_name.method_name() ; f() and error will occur cause this = undefined

 */