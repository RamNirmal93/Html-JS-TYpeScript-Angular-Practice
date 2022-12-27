class Employee{
    fName:string;
    lName:string;
    designation:string;

    public print():void{
        console.log(`Employee details`);
    }
}

class Manager extends Employee{

    constructor(fName:string,lName:string, designation:string){
        super();
        this.fName=fName;
        this.lName=lName;
        this.designation=designation;
    }

    public print(): void {
        super.print();
        console.log(`${this.fName} ${this.lName} - ${this.designation}`);
    }
}

class Lead extends Employee{

    constructor(fName:string,lName:string, designation:string){
        super();
        this.fName=fName;
        this.lName=lName;
        this.designation=designation;
    }

    public print(): void {
        super.print();
        console.log(`${this.fName} ${this.lName} - ${this.designation}`);
    }
}class Developer extends Employee{

    constructor(fName:string,lName:string, designation:string){
        super();
        this.fName=fName;
        this.lName=lName;
        this.designation=designation;
    }

    public print(): void {
        super.print();
        console.log(`${this.fName} ${this.lName} - ${this.designation}`);
    }
}

let emp:Employee[] = new Array(new Manager(`Naga`,`Raj`,`Manager`), new Lead(`Chaminda`, `P`,`Lead`), new Developer(`nirmal`,`p`,`Developer`));

for (var employee of emp){
    employee.print();
}