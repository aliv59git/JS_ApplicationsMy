
/* 
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName` and `lastName` properties
*   **Finds** all students whose `firstName` is before their `lastName` alphabetically
*   Then **sorts** them in descending order by fullname
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   Then **prints** the fullname of founded students to the console
*   **Use underscore.js for all operations**
*/
// var Person = {
//     init: function (firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.fullname = function () {
//             return this.firstName + ' ' + this.lastName;
//         };
//         return this;
//     }
// };

// var students = [
//     Object.create(Person).init('asen', 'Georgiev', 15),
//     Object.create(Person).init('Ivan', 'Asenov', 45),
//     Object.create(Person).init('Konstantin', 'Konstantinov', 25),
//     Object.create(Person).init('Maria', 'Marieva', 45),
// ];

var students = [{
            firstName: 'NAME #3',
            lastName: 'NAME #2'
        }, {
            firstName: 'NAME #4',
            lastName: 'NAME #1'
        }, {
            firstName: 'NAME #4',
            lastName: 'NAME #7'
        }];

function solve(){
    return function (students) {
        _.chain(students)
            .filter(function(person){
                return person.lastName > person.firstName;
            })
            .map(function(person){
                person.fullName = person.firstName + ' ' + person.lastName;
                return person;
            })
            .sortBy('fullName')
            .reverse()
            .each(function(person){
                console.log(person.fullName)
            });
    };
}


// var result = solve();
// result(students);

module.exports = solve;