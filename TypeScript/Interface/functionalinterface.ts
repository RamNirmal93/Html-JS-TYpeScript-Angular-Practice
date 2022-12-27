interface Add{
    (x:number,y:number):void; // if we mention the return type we cant change it,if we mention void it can be overrided
                                // if we not mention any return type then we can return any type
}

interface Sub{
    (x:number,y:number):number;
}

var add:Add;
var sub:Sub;

add = function(x:number,y:number):void{
    console.log(x+y);
}

sub = function(a:number,b:number):number{
    return (a-b);
}