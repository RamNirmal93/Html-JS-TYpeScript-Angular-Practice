//number indexed and string type array

interface StudentName{
    [index:number]:string;
}

var studentNames:StudentName =[`john`,`christle`,`raj`,`axel`];

//string indexed

interface StudentScore{
    [index:string]:number;
}

var studentScore:StudentScore={}; // its like object type

studentScore[`ram`]=100;
studentScore[`sai`]=99;

for(var item in studentScore){
    console.log(item);
    console.log(studentScore[item]);
}