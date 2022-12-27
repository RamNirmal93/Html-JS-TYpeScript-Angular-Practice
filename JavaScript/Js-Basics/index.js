console.log('Hello world');

let name = 'nirmal';
console.log(name);

let firstName='nirmal', lastName= 'pedamalla'
console.log(firstName +'  '+ lastName);

// variables-
// cannot be a reserved keyword
// should be meaningfulk
// cannot start with a Number
// cannot contain space or hypen


let i =1;
i =2;
console.log(i) //output will be 2 

const k =2;
// k=3;
// console.log(k);

// shows error as const values cant be overriden.

//primitive data types
let fname = 'nirmal'; //string literal
let age = 25 ; //number literal
let isapproved = false;//boolean literal
let firstnme; //undefined
firstnme=undefined;
let selectedColor = null; //null 

//Object

let person = {
    name1: 'sai' ,
    age1:22   
};

//Object dot notation
person.name1='john';

//Object Bracket notation

person['name1'] = 'marry'; //or

let selection = 'name1';
person[selection]= 'mossy';
console.log(person.name1);

//Arrays
let array1 = ['red', 'green'];
console.log(array1);
console.log(array1[0]);
array1[2]='blue';
array1[3]=1;
console.log(array1);
console.log(array1.length); //other properties in arrays

//Functions

function greet(){
    console.log('Hello')
}
greet();

function greet1(name){
    console.log('Hello'+' '+name);
}
greet1('nirmal');

//performing a task
function greet2(name, lastName){
    console.log(name + ' '+lastName)
}

greet2('john');
greet2('marry');
greet2('naruto', 'uzumaki');

// Calculating a value
function square(number){
    return number*number
}
    console.log(square(3));
   let number = square(2);
   console.log(number);

   //Arthematic Operators
   let x= 15; y= 3;
   console.log(x+y);
   console.log(y-x);
   console.log(x*y);
   console.log(x/y);
   console.log(x%y);
   console.log(x**y);

   //Increment Operators ++
   let z= x++;
   console.log(z);
   console.log(z);

   let a= ++x;
   console.log(a);
   console.log(a);

    //Decrement Operators --
    let c= x--;
    console.log(c);
    console.log(c);
    console.log(x)

    let d = --x;
    console.log(d);
    console.log(d);

    //Assignment operators x++ => x= x+1; x=x+5 => x+=5;
    //Comparison operators

    //relational
    let e=1;
    console.log(e>0);
    console.log(e>=0);

    //equality

    //strict equality === ; both type and value should be equal (type + value)
    console.log(e===1);
    console.log(e!==1);
    console.log(1===1);//true
    console.log('1'===1);// false as type is not equal

    //loose equality == ; value should be equal
    console.log(1==1);
    console.log('1'==1);
    console.log(10==2);
    console.log(true==1);//true


    //Terinary operators
    let points = 110;
    let type = points>100 ? 'gold':'silver' ;
    console.log(type);

    //Logical operators
    // And && (returns true if both operands are true)
    let highIncome = true;
    let goodCreditScore= true;
    let eligibleForLoan = highIncome && goodCreditScore;
    console.log(eligibleForLoan);
    //Or || ( returns true if any one operand is true)
    let highIncome1 = true;
    let goodCreditScore1= false;
    let eligibleForLoan1 = highIncome || goodCreditScore;
    console.log(eligibleForLoan1);
    //Not ! 
    let highIncome2 = true;
    let goodCreditScore2= false;
    let eligibleForLoan2 = highIncome && goodCreditScore;
    console.log(eligibleForLoan2);
    let applicationRefused = !eligibleForLoan2;

    //Logical Operators with non booleans
    // Falsy(false)
    // undefined
    // null
    // 0
    // NaN
    // ''      Anything that is not a falsy that is a true
    // short circuiting if after || any value is choosy then the other values are ignored
    let userColor='red';
    let defaultColor='blue';
    let currentColor= userColor||defaultColor;
    console.log(currentColor);


    //Bitwise Operator | ; &

    // 1=00000001
    // 2=00000010
    // For or | if any one is true then it will be true so for result
    // R=00000011 => 3
    console.log(1|2); //3
    // For and & if both are true then it will be true so for result
    // R=00000000 =>0
    console.log(1&2); //0
        //use case
        // Read write executable
        // 00000100=> only Read
        // 00000110=> read and write
        // 00000111=> read write and executable
    
    //Read write executable
    // 00000100 read
    // 00000010 write
    // 00000001 executable
    const readPermission = 4;
    const writePermission = 2;
    const executablePermission =1;
    let myPermission =0;
    myPermission= myPermission|writePermission;
    // let message= (myPermission&readPermission)?'yes':'no';
    let message= (myPermission&writePermission)?'yes':'no';
    console.log(message);


//Swapping Variables
let f = 'red';
let g = 'blue';
let h=f;
f=g;
g=h;
console.log(f);
console.log(g);

//loops
// for
// while
// do while
// for in
// for of

//for in

const person1 = {
    name2:'mosh',
    age2: 30
    
};
for(let key in person1)
console.log(key, person1[key]);

// person1.name2; //dot notation
// person1['name2'];//bracket notation

const colors =['red','green','blue'];
for(let index in colors)
console.log(index, colors[index]);

//for of
for(let color of colors)
console.log(color);

//break and continue
let j=0;
while (j<=10){
    if (j===8){
        break;///break the loop and stop executes
    }

    if (j%2===0) {j++;
        continue;} // stop executing the divisible by2 and jumps to next number
    
    console.log(j);
    j++
}

//max of two numbers

function max(num1, num2){
    // if(num1> num2){
    //     return num1;
    // }
    // else return num2;

    // if(num1> num2)
    //     return num1;
    //     return num2;

    return (num1>num2)? num1:num2; 
}

let num3 = max(3,5);
console.log(num3);

//landscape or portrait

function isLandscape(width,height){
    // if(width>height)return true;
    // return false

    // return (width>height)? 'landscape':'portrait';
    return(width>height);
}

let w = isLandscape(50,30);
console.log(w);


//FizzBuzz
//number is divisible by 3 "Fizz"
//number is divisible by 5 "Buzz"
//number is divisible by both 5 & 3 "FizzBuzz"
//number is not divisible by both 5&3 we get "input number"
//Not a number we get "Not a number"

const output =fizzBuzz(15);
console.log(output);

function fizzBuzz(input) { 

    if ((input %3 === 0) && (input %5 === 0)) return 'FizzBuzz';

    // if (typeof input !== 'number') return 'Not a number';
    if (typeof input !== 'number') return NaN;
    
    if(input %3 === 0) return 'Fizz';

    if (input %5 === 0) return 'Buzz';

    

    return input;

}

//Demerit points or check speed 

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint =5;

    if (speed<speedLimit + kmPerPoint) console.log('Ok');

    else{
        const points = Math.floor((speed-speedLimit)/kmPerPoint);
        if(points>=12) console.log('Licence Suspended');
        else console.log('Points', points);
    }
 
}
    checkSpeed(76);


    //Even & Odd nubers

    showNumbers(10);

    function showNumbers(limit){
         for (let i =0; i<limit; i++){
        //     if(i %2 ===0)console.log(i, 'Even');
        //     else console.log(i, 'Odd' );
        const message = (i %2 ===0)? 'Even':'Odd';
        console.log(i, message);
        }

    }

    // //count Truty :-
    // Falsy
    // undefined
    // null
    // ''
    // false 
    // 0
    // NaN

    function countTRuty(array){
        let count=0;
        for(let value of array)
        // if(value!== false || value !== undefined)count++;
        if (value)count++;
        return count;
        }

    const array = [0, null, undefined,'',1,2,3];
    console.log(countTRuty(array));

    //Exercise string properties
    const movie ={
        title: 'a',
        releaseYear: 2008,
        rating:'4.5',
        director:'b'
    };
    showProperties(movie);
    function showProperties(obj){
        for(let key in obj)
            if (typeof obj[key] ==='string')
            console.log(key, obj[key]);
    }

    //sum of multiples 5 and 3

    function sum (limit){
        let sum =0;
        
        for(let i=0 ; i<=limit; i++)
            if( i%3 ===0 || i%5 === 0)
                sum +=i;
    
    return sum;

    }

    console.log(sum(10));

//calculating grades
const marks =[80,80,50];
console.log(calculatingGrade(marks))
function calculatingGrade(marks){

    const average =calculateAverage(marks);

    if (average<60)return 'F';
    if (average<70)return 'D';
    if (average<80)return 'C';
    if (average<90)return 'B'; 
    return'A';
}

function calculateAverage(array){
    let sum = 0;
    for(let value of array)
        sum+=value;
    return sum/array.length;
   
}

// Star progrmme
    shoeStars(5);
function shoeStars(rows){
    for (let row=1; row<=rows;row++){
        let pattern= '';
        for(let i=0; i<row;i++)
        pattern+='*';
    console.log(pattern);
    }
}

//prime numbers

showPrime(10);

function showPrime(limit){

    for(let number=2;number <= limit; number++) 
    if (isPrime(number)) console.log(number);
    
}

function isPrime(number){
    for(let factor=2; factor < number; factor++)
        if(number % factor === 0)
            return false;
    return true;
}


//Object oriented programming (OOPS)

const circle ={
    radius:1,
    location:{
        x:1,
        y:1
    },
    isVisible:true,
    draw:function(){
        console.log('draw');
    }
};
circle.draw();//method


//Factory Function
function createCircle(radius){
    return{
        radius,
        draw1(){
            console.log('draw');
        }
    }

}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

//Constructor Function
function Circle(radius){
    this.radius=radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle3 = new Circle(1);


//dynamic nature of object
const circle4={
    radius:1
};
circle4.color='yellow';
circle4.draw=function(){}
    delete circle4.draw;

    console.log(circle4);
    //Constructor property
    const another = new Circle(2);//in console try another.constructor and circle.constructor
    //default constructors in java
    new String();//'',"",
    new Boolean();//true,false
    new Number();//1,2,3


    //Functions are Objects
    Circle.call








