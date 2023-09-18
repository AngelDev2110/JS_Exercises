/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function area(pol){
    console.log(pol.calcArea())
}

class Triangle{
    constructor(base,height){
        this.base = base
        this.height = height
    }
    calcArea(){
        return((this.base*this.height)/2)
    }
}

class Square{
    constructor(side){
        this.side = side
    }
    calcArea(){
        return(this.side*this.side)
    }
}

class Rectangle{
    constructor(side1,side2){
        this.side1 = side1
        this.side2 = side2
    }
    calcArea(){
        return(this.side1*this.side2)
    }
}

triangle = new Triangle(4,6)
square = new Square(4)
rectangle = new Rectangle(4,8)

area(triangle)
area(square)
area(rectangle)