let courses = new Set();
courses.add(`angular`);
courses.add(`react`);
courses.add(`js`);
courses.add(`node`);
console.log(courses.size);
console.log(courses.values());
courses.forEach(function (course){
    console.log(course)
})