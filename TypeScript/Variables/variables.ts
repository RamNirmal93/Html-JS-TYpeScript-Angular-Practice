var n1:number=10;
console.log(n1);

var s1:string = "nirmal";
var s2:string =`sravanthi`;
var s3:string = 'sai';

console.log(s1);
console.log(s2);
console.log(s3);

var b1:boolean= true;
var b2:boolean= false;
var b3:boolean;

console.log(b1);
console.log(b2);
console.log(b3);//undefined

var a1:any ={
    productId:1,
    productName:`iphone`
};
console.log(a1);

//Homogenous array

var array1:Array<string> = [`apple`,`banana`,`grape`];
console.log(array1);
console.log(array1[0]);
console.log(array1.length);

//Heterogenous array
var array2:Array<any> = [`apple`,`banana`,`grape`,1,2,true];
console.log(array2);
console.log(array2[4]);
console.log(array2.length);
