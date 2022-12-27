class Organizer1{
    private id:number;
    private name:string;
    constructor(id:number,name:string)
    {
        this.id=id;
        this.name=name;
    }
    display(){
        console.log(this.id,+" "+ this.name);
    }
    get ids():number{
        return this.id;
    }
    set ids(ids:number)
    {
        this.id=ids;
    }

    get names():string{
        return this.name;
    }
    set names(name:string){
        this.name=name;
    }
}


class Event1{
    private id:number;
   private name:string;
    private description:string;
    private startTime:string;
    private EndTime:string
    constructor(id:number,name:string,desc:string,startT:string,EndT:string)
    {
        this.id=id;
        this.name=name;
        this.description=desc;
        this.startTime=startT;
        this.EndTime=EndT;
    }
    display(){
        console.log(this.id+" "+this.name+` `+this.description+" "+this.startTime+" "+this.EndTime);
    }

     get ids():number{
        return this.id;
    }
    set ids(ids:number)
    {
        this.id=ids;
    }
      get names():string{
        return this.name;
    }
    set names(name:string){
        this.name=name;
    }

     get descriptions():string{
        return this.description;
    }
    set descriptions(desc:string)
    {
        this.description=desc;
    }

     get startT():string{
        return this.startTime;
    }
    set startT(ST:string)
    {
        this.startTime=ST;
    }

    get EndT():string{
        return this.EndTime;
    }
    set EndT(ET:string)
    {
        this.EndTime=ET;
    }
}


class Venue{
    private id:number;
    private name:string;
    private description:string;
    private Address:string;
    
    constructor(id:number,name:string,desc:string,Address:string)
    {
        this.id=id;
        this.name=name;
        this.description=desc;
        this.Address=Address;
        
    }
    display(){
        console.log(this.id+" "+this.name+" "+this.description+" "+this.Address);
    }

     get ids():number{
        return this.id;
    }
    set ids(ids:number)
    {
        this.id=ids;
    }

    get names():string{
        return this.name;
    }
    set names(name:string){
        this.name=name;
    }

      get descriptions():string{
        return this.description;
    }
    set descriptions(desc:string)
    {
        this.description=desc;
    }
   get address():string{
    return this.Address;
   }

   set address(add:string){
    this.Address=add;
   }
}
var org=new Organizer1(3,"Yogesh");
org.display();
var event2=new Event1(3,"Yogesh","Cloud Event","9AP","11PM");
event2.display();
var venue=new Venue(3,"Yogesh","Venu ","Mumbai");
venue.display();