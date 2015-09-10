(function () {
  if(typeof require !== "undefined") {
    _ = require('../scripts/underscore.js');
  }

  var person = {
    firstName: 'Doncho',
    lastName: 'Minkov',
    age: 24,
    introduce: function () {
      return 'Hi! My name is ' + this.firstName + ' ' + this.lastName +
        ' and I am ' + this.age + ' years old.';
    }
  };

  console.log('---Keys: ');
  console.log(_.keys(person));

  console.log('---Values: ');
  console.log(_.values(person));

  console.log('---Pairs: ');
  console.log(_.pairs(person));

  console.log('---Inverted: ');
  console.log(_.invert(person));
}());