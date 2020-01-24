'use strict';


function Animal(name){
    this.name = name ;
}

Animal.prototype.walk = () => {
    console.log('im walking');
}

const Dog = function(name){
    Animal.call(this,name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = () => {
console.log('anhfb');
}

module.exports = Dog;