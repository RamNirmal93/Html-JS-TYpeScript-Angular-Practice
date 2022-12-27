function doubleMe(x:number);
function doubleMe(x:string);
function doubleMe(x:any){
    if (x && typeof x===`number`){
        console.log(x*x);
    }
    if (x && typeof x===`string`){
        console.log(x + " "+x);
    }
}
doubleMe(4);
doubleMe(`john`);