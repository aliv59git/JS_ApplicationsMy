/* 
Create a function that:
*   **Takes** an array of animals
    *   Each animal has propeties `name`, `species` and `legsCount`
*   **finds** and **prints** the total number of legs to the console in the format:
    *   "Total number of legs: TOTAL_NUMBER_OF_LEGS"
*   **Use underscore.js for all operations**
*/

function solve(){
    return function (animals) {
        var totalLegs = _.reduce(animals, function(baseCount, animal){
            return baseCount + animal.legsCount;
        }, 0);

        console.log('Total number of legs: ' + totalLegs);
    };
}
// console.log(animals);
// console.log('');

var result = solve();
result(animals);

module.exports = solve;