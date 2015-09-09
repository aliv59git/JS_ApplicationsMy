(function () {
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

  var people = [
    Object.create(Person).init('Doncho', 'Minkov', 45),
    Object.create(Person).init('Nikolay', 'Kostov', 34),
    Object.create(Person).init('Anelya', 'Stoyanova', 18),
    Object.create(Person).init('Ivaylo', 'Kenov', 87),
    Object.create(Person).init('Todor', 'Stoyanov', 56)
  ];

  var first = _.first(people);
  console.log('---First: ');
  console.log(first.toString());

  var initial = _.initial(people);
  console.log('---Initial: ');
  console.log(initial.toString());

}());