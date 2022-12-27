enum Gender{
    Male,
    Female
}

console.log(Gender.Male);//index
console.log(Gender.Female);
console.log(Gender[0]);//value at 0 index

enum weekends{
    Saturday=6, //index changed to 6
    Sunday=7
}

console.log(weekends.Saturday);
console.log(weekends.Sunday);
console.log(weekends[6]);
console.log(weekends[7]);