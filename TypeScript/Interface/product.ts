interface Product{
    id:number;
    name:string;
    description:string;
    price?:number; //optional parameter in interface
    display():void;
}

var product1:Product={ //subscriber for interface
    id:123,
    name:`iphone`,
    description:`its awesome`,
    price: 1000,
    display():void{
        console.log(this.id+" "+this.name);
    },

}

var product2:Product={ //subscriber for interface
    id:124,
    name:`iphone`,
    description:`its awesome`,
    display():void{
        console.log(this.id+" "+this.name);
    },
    
}