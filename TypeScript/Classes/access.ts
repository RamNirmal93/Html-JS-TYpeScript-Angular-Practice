class Student{
    name:string; // by default class variables are public
    public college:string = `vit`;
    public readonly grade:string = `B`;
    private _lname:string;

    display(){
        console.log(this._lname);
    }

    get lname():string{
        return this._lname ;
    }

    set lname(_lname:string){
         this._lname = this.lname;
    }
}
var student = new Student();
student.name=`john`;
student.college= `NIT`;
// student.grade=`A` // we cant change the read only variable
student.lname= `chris`;
console.log(student.lname="ram");