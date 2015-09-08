(function () {
	if(typeof require !== 'undefined') {
		_ = require('../scripts/underscore.js');
	}

	var Person = Object.create({
		init: function (fname, lname) {
			this.fname = fname;
			this.lname = lname;
			return this;
		},
		toString: function () {
			return this.fname + ' ' + this.lname;
		}
	});

	var people = [
		Object.create(Person).init('Doncho', 'Minkov'),
		Object.create(Person).init('Nikolaj', 'Kostov'),
		Object.create(Person).init('Anelia', 'Stojanova'),
		Object.create(Person).init('Ivajlo', 'Kenov'),
		Object.create(Person).init('Todor', 'Stojanov'),

	];

	var withFamilyNameWithK = _.filter(people, function (p) {
		return p.lname[0] === 'K';
	});

	var withoutFamilyNameWithK = _.reject(people, function (p) {
		return p.lname[0] === 'K';
	});

	console.log('---People whose last name does not start with "K": ');
	_.each(withoutFamilyNameWithK, function (p) {
		console.log(p.toString());
	});

}());