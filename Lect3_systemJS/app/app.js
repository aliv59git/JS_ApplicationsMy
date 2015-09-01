//jquery

import 'bower_components/jquery/dist/jquery.js';

$('<h1/>')
  .text('Loaded!')
  .appendTo('#container');


//db

import db = db from 'app/db.js';
db.add();
