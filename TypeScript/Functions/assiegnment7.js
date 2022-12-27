var n;
function isPrime(n) {
    for (var factor = 2; factor < n; factor++)
        if (n % factor === 0)
            return false;
    return true;
}
console.log(isPrime(6));
var num = function (x) {
    for (var i = 2; i < x; i++) {
        if (x % i === 0)
            return "not a prime";
        return 'its a prime';
    }
};
console.log(num(10));
