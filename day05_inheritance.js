class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function(){
    return this.w * this.h
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle{
    constructor(l){
        super()
        this.w = l
        this.h = l
    }
}

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);

    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}
/*
Inheritance:    allows a class to inherit the properties and  methods of another class making the relation between them ( parent => child)
you can do this by using the keyword extends EX: class Square extends Rectangle

// You must call super() before you can use the 'this' keyword in a subclass constructor. Failing to do so will result in a ReferenceError.

// if we want to add a method to an existing class we can do this with the following syntax : class_name.prototype.method_name = function(){}
 */