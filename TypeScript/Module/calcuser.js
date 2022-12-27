"use strict";
//import mul,{add as sum,sub} from './calc'
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc");
var c = new calc_1.Calculator();
console.log(c.add(2, 3)); // alias
console.log(c.sub(10, 2));
// alias 
// import * as c from './calc'
// console.log(c.add(2,3));
// console.log(c.sub(2,3));
//export default 
var calc_2 = require("./calc");
console.log((0, calc_2.default)(10, 20));
//class level aliasing
var calc_3 = require("./calc");
var calc = new calc_3.Calculator();
console.log(calc.add(2, 3));
//import Calculator from './calc'  // default export class
//var c = new Calulator();
//c.add(10,3)
