var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male); //index
console.log(Gender.Female);
console.log(Gender[0]); //value at 0 index
var weekends;
(function (weekends) {
    weekends[weekends["Saturday"] = 6] = "Saturday";
    weekends[weekends["Sunday"] = 7] = "Sunday";
})(weekends || (weekends = {}));
console.log(weekends.Saturday);
console.log(weekends.Sunday);
console.log(weekends[6]);
console.log(weekends[7]);
