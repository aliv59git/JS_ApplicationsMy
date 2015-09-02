var items = [];

function add (item){
	items.push(item);
	console.log('add');
}

console.log('DB');
function all () {
	console.log('all');
	alert('My new Loder!');
	return items.slice();
}

export {add, all};
