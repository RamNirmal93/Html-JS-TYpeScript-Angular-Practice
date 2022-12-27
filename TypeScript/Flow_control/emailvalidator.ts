var email:string = `nirmal@gmail.com`;
var atPosition:number = email.indexOf("@");
var dotPosition:number = email.indexOf(".");

if(atPosition==-1 || dotPosition==-1){
    console.log(`invalid email ${email}`);
}
else console.log(`email is valid`);