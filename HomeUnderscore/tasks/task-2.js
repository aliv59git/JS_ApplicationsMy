/*
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName`, `lastName` and `age` properties
*   **finds** the students whose age is between 18 and 24
*   **prints**  the fullname of found students, sorted lexicographically ascending
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve(){
    return function (students) {
        _.chain(students)
            .filter(function(person){
                return person.age >= 18 && person.age <= 24;
            })
            .map(function(person){
                person.fullName = person.firstName + ' ' + person.lastName;
                return person;
            })
            .sortBy('fullName')
            .each(function(person){
                console.log(person.fullName);
            });
    };
}

var students = [{
            firstName: 'NAME #3',
            lastName: 'NAME #2',
            age: 5
        }, {
            firstName: 'NAME #4',
            lastName: 'NAME #1',
            age: 18
        }, {
            firstName: 'NAME #4',
            lastName: 'NAME #7',
            age: 55
        }, {
            firstName: 'NAME #8',
            lastName: 'NAME #9',
            age: 20
        }, {
            firstName: 'NAME #11',
            lastName: 'NAME #15',
            age: 55
        }];

var result = solve();
result(students);

module.exports = solve;