(function () {
	//check if running Node.js
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
		fullname: function () {
			return this.fname + ' ' + this.lname;
		}
	});

	var people = [
		Object.create(Person).init('Doncho', 'Minkov', 45),
		Object.create(Person).init('Nikolay', 'Kostov', 34),
		Object.create(Person).init('Anelya', 'Stoyanova', 18),
		Object.create(Person).init('Ivaylo', 'Kenov', 87),
		Object.create(Person).init('Todor', 'Stoyanov', 56),
	];

	//with _.every() and _.some()
	console.log("All below 50: " + _.every(people, function (p) {
		return p.age < 50;
	}));
	console.log("All above 10: " + _.every(people, function (p) {
		return p.age > 10;
	}));	
	console.log("Some below 50: " +_.some(people, function (p) {
		return p.age < 50;
	}));	
	console.log("Some above 50: " + _.some(people, function (p) {
		return p.age > 50;
	}));	
	console.log("All below 88: " + _.every(people, function (p) {
		return p.age < 88;
	}));

	//with _.all() and _.any()
	console.log("All below 50: " + _.all(people, function (p) {
		return p.age < 50;
	}));
	console.log("All above 10: " + _.all(people, function (p) {
		return p.age > 10;
	}));	
	console.log("Some below 50: " +_.any(people, function (p) {
		return p.age < 50;
	}));	
	console.log("Some above 50: " + _.any(people, function (p) {
		return p.age > 50;
	}));	
	console.log("All below 30: " + _.all(people, function (p) {
		return p.age < 30;
	}));


}());