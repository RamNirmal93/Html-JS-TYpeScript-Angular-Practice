class Check{
    static bankName:string = `Bank of america`;
    customerName:string;
    accNo:number;
    routingNo:number;

    display(){
        Check.bankName= `BOA`;
        console.log(Check.bankName);
    }
}

var check = new Check();
console.log(Check.bankName)
check.accNo;
check.display();

var check1 = new Check();
Check.bankName= `BOA`;
console.log(Check.bankName);
check1.accNo;
check1.display();