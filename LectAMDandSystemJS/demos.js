var fs = require('fs');

module.exports = function () {
	var files = fs.readdirSync('.');
	files.forEach(function (item) {
		console.log(item);
	});
};