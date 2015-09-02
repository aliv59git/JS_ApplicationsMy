//jquery


alert('Module loaded!');



import 'bower_components/jquery/dist/jquery.js';

$('<h1/>').text('jQuery Module').appendTo(document.body);

//db

import {add, all} from 'app/db.js';
add('Val');
add(' Dak');
console.log(all());
