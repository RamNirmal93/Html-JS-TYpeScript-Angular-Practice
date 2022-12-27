class TouchScreenLaptop {
    ram:string;
    hd:string;
    processor:string;

    constructor(ram:string,hd:string,processor:string){
        this.ram=ram;
        this.hd=hd;
        this.processor=processor;
    }

    scroll(){
        console.log("Scrolling...");
    }

    click(){
        console.log("Clicking...");
    }
}

class HPLaptop extends TouchScreenLaptop {
    selfRecovery:string;

    constructor(ram:string,hd:string,processor:string,selfRecovery:string){
        super(ram,hd,processor);
        this.selfRecovery=selfRecovery;
    }

    scroll(){
        console.log("HpLaptop scroll...");
    }
}

class DellLaptop extends TouchScreenLaptop {
    mobileAccess:string;

    constructor(ram:string,hd:string,processor:string,mobileAccess:string){
        super(ram,hd,processor);
        this.mobileAccess=mobileAccess;
    }

    scroll(){
        console.log("DellLaptop scroll...");
    }
}