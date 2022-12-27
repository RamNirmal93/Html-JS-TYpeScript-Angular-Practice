var hello =():string => {
    return `hello`;
}
console.log(hello());

//passing parameters

var hello1 =(name:string):string => {
    return `hello `+name;
}
console.log(hello1('Sai'));

//multiply
var multiply= (num1:number,num2:number):number=>{return num1*num2}
console.log(multiply(9,8));

//array of arrow functions
var array1:Array<any> =[];

for(var i=0; i<10;i++){
    array1.push(():number=>{return i});
}
for(var i=0; i<10;i++){
   console.log(array1[i]());
}