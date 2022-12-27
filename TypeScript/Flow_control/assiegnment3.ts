var data = prompt(`enter a number`);
var x:number = parseInt(data);

for(var i:number=0; i<=x;i++){

    if (i%5===0){
        continue;
    }
    console.log(i);

}

let z:number=0;
while(z<=x){
    console.log(z++);

}