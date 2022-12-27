//import mul,{add as sum,sub} from './calc'

import {Calculator} from './calc' ;

var c = new Calculator();
console.log(c.add(2,3));// alias
console.log(c.sub(10,2));

// alias 
// import * as c from './calc'

// console.log(c.add(2,3));
// console.log(c.sub(2,3));

//export default 
import mul,{add as sum,sub} from './calc'
console.log(mul(10,20));

//class level aliasing

import {Calculator as cal} from './calc' ;

var calc = new cal();
console.log(calc.add(2,3));

//import Calculator from './calc'  // default export class
//var c = new Calulator();
//c.add(10,3)

