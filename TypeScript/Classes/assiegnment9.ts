class Organizer{
    id:number;
    name:string;

  constructor(id:number,name:string){
        this.id = id;
        this.name = name;
    }  

    display(){
        console.log(this.id+' '+this.name);
    }
}
class Events{
    id:number;
    name:string;
    time:number;

    constructor(id:number,name:string,time:number){
        this.id = id;
        this.name = name;
        this.time = time;
    }  

    display(){
        console.log(this.id+' '+this.name+' '+this.time);
    }
}

var organize = new Organizer(123,'Ram');
organize.display();

var event1 = new Events(1234,'Birthday party',23.59);
event1.display();