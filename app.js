console.log("Hi Venky")

function sayEat(name){
	console.log("Eat " + name);
}

sayEat('Healthy Food');

//demonstration for module
const logModule= require('./logger');
console.log(logModule)
logModule.logFeature("Hello Venky")

//demonstration for prebuilt path module
const path = require('path')
console.log(path.parse(__filename))

//demonstration for prebuilt os module
const os = require('os')
console.log(os)
