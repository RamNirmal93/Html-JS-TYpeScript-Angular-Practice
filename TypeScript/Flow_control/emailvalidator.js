var email = "nirmal@gmail.com";
var atPosition = email.indexOf("@");
var dotPosition = email.indexOf(".");
if (atPosition == -1 || dotPosition == -1) {
    console.log("invalid email ".concat(email));
}
else
    console.log("email is valid");
