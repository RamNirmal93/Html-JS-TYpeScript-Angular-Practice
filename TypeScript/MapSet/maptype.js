let studentScores = new Map([[`john`, 90], ['sai', 95], ['ram', 88]]);
console.log(studentScores.get('sai'));
studentScores.set('nirmal', 100);
console.log(studentScores.size);
studentScores.delete('ram');
console.log(studentScores.has('ram'));
// studentScores.clear();
console.log(studentScores.has(`john`));
console.log(studentScores.keys());
for (let key of Array.from(studentScores.keys())) {
    console.log(key);
    console.log(studentScores.get(key));
}
console.log(studentScores.values());
console.log(studentScores.entries());
