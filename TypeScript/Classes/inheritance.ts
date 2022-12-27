class BMW{
    make:string;
    model:string;
    year:string;

    constructor(make:string,model:string,year:string){
        this.make=make;
        this.model=model;
        this.year=this.year;
    }

    commonEngineFunc(){
        console.log(`commonEngineFunc`);
    }

    start(){
        console.log(`start`);
    }

    stop(){
        console.log(`stop`);   
    }
}

class ThreeSeries extends BMW{
    cruiseControlEnabled:boolean;

    cruiseControl(){
        this.cruiseControlEnabled= true;
        console.log(`cruising`);
    }

    constructor(make:string,model:string,year:string,cruiseControlEnabled:boolean){
        super(make,model,year);
        this.cruiseControlEnabled=cruiseControlEnabled
    }

    start(){
        console.log(`Button start`);
    }

    stop(){
        console.log(`Button stop`);   
    }
}

class FiveSeries extends BMW{
    parkingAssistEnabled:boolean;

    parkingAssist(){
        this.parkingAssistEnabled= true;
        console.log(`parked`);
    }

    constructor(make:string,model:string,year:string,parkingAssistEnabled:boolean){
        super(make,model,year);
        this.parkingAssistEnabled=parkingAssistEnabled;
    }

    start(){
        console.log(`Remote start`);
    }

    stop(){
        console.log(`Remote stop`);   
    }
}

var threeSeries = new ThreeSeries(`BMW`,`328i`,`2018`,false);
    console.log(threeSeries.cruiseControlEnabled);
    threeSeries.commonEngineFunc();
    threeSeries.start();
    threeSeries.stop();
    threeSeries.cruiseControl();
    