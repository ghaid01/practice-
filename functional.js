'use strict';

function multiply(a,b){
    return a * b;
}

function add(a,b){
    return a + b;
}

let heightRequirment  = 46;

function canRide(height){
return height >= heightRequirment 
}

let numbers = [2,4,6];

function pureSquares([...nums]){
    for ( var i=0; i < nums.length; i++){
        nums[i] = nums[i] * nums[i];
    }
return nums;
}

console.log(pureSquares(numbers));
console.log(numbers);

//impure function 

function impureSquares(nums){
    for (var i =0; i<nums.length; i++){
        nums[i] = nums[i]*nums[i];
    }
    return nums;
}
console.log(impureSquares(numbers));
console.log(numbers);

//function declaration / higher order func
function sayHi(person){
    return function(){
        console.log('hi', person)
    }
}


//func expression 
var func = function(name) {
    console.log('hi',name);

};


//higher order func 
function sayHello(person,fn){
    return function(){
        fn(person)
    }
}
