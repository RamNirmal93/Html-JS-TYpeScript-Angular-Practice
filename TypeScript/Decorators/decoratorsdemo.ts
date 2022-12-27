function classDecoratorFactory(price:number){
    console.log(`class Decrator Factory`)
    return(constructor: Function) => {
        console.log(`class Decorator`);
        console.log(constructor);
        constructor.prototype.price =price;
    }
} 

function classDecorator(constructor: Function){
    console.log(`ClassDecorator`);
    console.log(constructor);
    constructor.prototype.price =1000;

}

function propertyDecorator(target:any, propertyName:string){
    console.log(`propertyDecorator`);
    console.log(target.constructor);
    console.log(propertyName);
}

function methodDecorator(target:any, methodName:string,descriptor:PropertyDescriptor){
    console.log(`method decorator`)
    console.log(target)
    console.log(methodName);
    console.log(descriptor);
}

function paramDecorator(target:any,methodName:string,paramIndex:number){
    console.log(`parameterDecoratot`)
    console.log(target)
    console.log(methodName)
    console.log(paramIndex)
}

@classDecoratorFactory(1234)
@classDecorator
class Product{
    @propertyDecorator
    name:string = `Iphone`;
    constructor(id:number){

        }
        @methodDecorator
        print(@paramDecorator test:string){
       console.log(this.name)

    }
}

let p = new Product(1);
console.log((<any>p).price);