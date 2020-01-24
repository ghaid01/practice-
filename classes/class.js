'use strict';

class Animal{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log('im walking')
    }
}

class Dog extends Animal{
    speak(){
        console.log('sfbckab')
    }

    run(){
        super.walk();
    }
}

module.export = Dog;