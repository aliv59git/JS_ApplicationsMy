/* 
Create a function that:
*   Takes an array of students
    *   Each student has:
        *   `firstName`, `lastName` and `age` properties
        *   Array of decimal numbers representing the marks         
*   **finds** the student with highest average mark (there will be only one)
*   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve(){
    return function (students) {
        var student = _.chain(students)
            .map(function(person){
                person.fullName = person.firstName + ' ' + person.lastName;

                person.averageGrade = (_.reduce(person.marks, function(base, mark){
                    return base + mark;
                }, 0)) / person.marks.length;

                return person;
            })
            .sortBy(function(person){
                return -person.averageGrade;
            })
            .first()
            .value();

        console.log(student.fullName + ' has an average score of ' + student.averageGrade);
    };
}


var students = [{
            firstName: 'NAME #3',
            lastName: 'NAME #2',
            age: 5,
            marks: [1,2,3]
        }, {
            firstName: 'NAME #4',
            lastName: 'NAME #1',
            age: 18,
            marks: [1,2,3]
        }, {
            firstName: 'NAME #5',
            lastName: 'NAME #7',
            age: 55,
            marks: [1,2,3,6]
        }, {
            firstName: 'NAME #8',
            lastName: 'NAME #9',
            age: 20,
            marks: [1,2,3]
        }, {
            firstName: 'NAME #11',
            lastName: 'NAME #15',
            age: 55,
            marks: [1,2,3]
        }];

var result = solve();
result(students);

module.exports = solve;
