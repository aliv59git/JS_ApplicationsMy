var items = [];

// function* getGenerator(){
// 	let i = 0;
// 	while(true){
// 		yield += 1;
// 	}
// }

// var gen = getGenerator();

// for (let n of gen) {
// 	console.log(n);
// 	if(n>15){
// 		break;
// 	}
// }

function add (item){
	items.push(item);
	console.log('add');
}

console.log('DB');
alert('My new Loder!');
function all () {
	console.log('all');
	return items.slice();
}

export {add, all};
