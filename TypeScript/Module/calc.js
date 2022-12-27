"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.sub = exports.add = void 0;
function add(n1, n2) {
    return n1 + n2;
}
exports.add = add;
function sub(n1, n2) {
    return n1 - n2;
}
exports.sub = sub;
// // export{add,sub}; // first method  or else we can specify at function itself
// //export default
function mul(n1, n2) {
    return n1 * n2;
}
exports.default = mul;
//class level 2
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (n1, n2) {
        return n1 + n2;
    };
    Calculator.prototype.sub = function (n1, n2) {
        return n1 - n2;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//class level export default
// export default class Calculator{
//     add(n1:number,n2:number):number{
//            return n1+n2;
//        }
//    sub(n1:number,n2:number):number{
//            return n1-n2;
//        }
//    }
