'use strict';

const dogClass = require('./class');
const dogConstructor = require('./constructor');


const bobViaConstructor = new dogConstructor('bob');
console.log(bobViaConstructor);
console.log(bobViaConstructor.speak());
console.log(bobViaConstructor.walk());


const bobViaClass = new dogClass('bob');
console.log(bobViaClass);
console.log(bobViaClass.speak());
console.log(bobViaClass.walk());

//this is a comment
