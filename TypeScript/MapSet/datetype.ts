let expiryDate:any = new Date();
console.log(expiryDate);

let expiryDate1:any = new Date("2025-11-30");
console.log(expiryDate1);
console.log(expiryDate1.getDay());
console.log(expiryDate1.getDate());
console.log(expiryDate1.getHours());
console.log(expiryDate1.getMinutes());
console.log(expiryDate1.toTimeString());
expiryDate1.setDate(20);
console.log(expiryDate1);
