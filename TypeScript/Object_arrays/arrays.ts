var courses:any =[`ts`,`js`,`angular`];
courses.push(`spring`);
courses.push(10);

for(var i:number =0; i<courses.length; i++){
    console.log(courses[i]);
}

//DeStructuring array
var x = courses[0];

var [a,b,c]= courses;
console.log(a);
console.log(b);
console.log(c);
console.log(x);