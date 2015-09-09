(function (){

  if(typeof require !== 'undefined') {
    _ = require('../scripts/underscore.js');
  }

  var Person = Object.create({
    init: function (fname, lname, age) {
      this.fname = fname;
      this.lname = lname;
      this.age = age;
      return this;
    }, 
    toString: function () {
      return this.fname + ' ' + this.lname;
    }
  });

  people = [
    Object.create(Person).init('Doncho', 'Minkov', 45),
    Object.create(Person).init('Nikolay', 'Kostov', 34),
    Object.create(Person).init('Aneliya', 'Stoyanova', 18),
    Object.create(Person).init('Ivaylo', 'Kenov', 87),
    Object.create(Person).init('Todor', 'Stoyanov', 56)
  ];

  console.log("---Original: ");
  console.log(people.join(", "));

  var sortedByFirstName = _.sortBy(people, 'fname');
  console.log('---By First Name: ');
  console.log(sortedByFirstName.join(", "));

  var sortedByLastName = _.sortBy(people, 'lname');
  console.log('---By Last Name: ');
  console.log(sortedByLastName.join(", "));

  var sortedByFullnameLength = _.sortBy(people, function (p) {
    return p.toString().length;
  });
  console.log('---By length of fullname: ');
  console.log(sortedByFullnameLength.join(", "));

  console.log('---By count of length of first name: ');
  var countBy = _.countBy(people, function (p) {
    return p.fname.length;
  });
  console.log(countBy);
}());