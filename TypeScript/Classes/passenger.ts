class Passenger{
    fName:string;
    lName:string;
    frequentFlyerNo:number;

    constructor(fName:string,lName:string,frequentFlyerNo:number){

        this.fName = fName;
        this.lName = lName;
        this.frequentFlyerNo = frequentFlyerNo;
    }

    display(){
        console.log(this.fName+ " "+this.lName+" "+this.frequentFlyerNo);
    }
}



var passenger = new Passenger(`John`,`Bailey`,123);
passenger.display();

for(let item in passenger){
if (item!==`display`){ 
    console.log(item);
    console.log(passenger[item]);}
}// one method

var passenger2= new Passenger(`Bob`, `christle`,124)
passenger2.display();

for(let item in passenger2){
    if (passenger2[item] instanceof Function){    //ignores function while executing
        continue;
    }
    else{
        console.log(item);
        console.log(passenger2[item]);
    }
}






