let cell:string= `1234567890`
let re:any =/[0-9]{10}/ ;   //0 to 9 numbers and 10 digits
if (cell.match(re)) console.log(`cell number is valid`);
else console.log(`invalid cell number`);
