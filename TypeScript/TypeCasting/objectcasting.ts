interface Employee{
    id:number;
}

let e1:Employee;
let e2 = {id:123,name=`john`}

e1 =e2;
e2=e1;// cant assigned
