var vaccines:any =[ `J&J`,`Pfizer`,`Sputnik`];

vaccines.push(`Covaxin`);

for(var i =0; i<vaccines.length; i++) {
    console.log(vaccines[i]);
}

var [a,b,c,d] = vaccines;
console.log(a);
console.log(b);
console.log(c);
console.log(d);