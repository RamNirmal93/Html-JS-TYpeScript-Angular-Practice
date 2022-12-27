//number indexed and string type array
var studentNames = ["john", "christle", "raj", "axel"];
var studentScore = {}; // its like object type
studentScore["ram"] = 100;
studentScore["sai"] = 99;
for (var item in studentScore) {
    console.log(item);
    console.log(studentScore[item]);
}
