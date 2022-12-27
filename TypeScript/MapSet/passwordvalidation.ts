let password:string =`tEsT1234`;

// ?=. means atleast one
// * means any
// \w means alphanumeric
let regEx:any =/(?=.*[A-Z])\w{4,10}/  ;           // {minimum,maximum}
if(password.match(regEx)) console.log(`password is valid`);
else console.log(`not valid`);
