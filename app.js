//!console.log('NPM Script Test');

//to know the directory on which we r working
//console.log(__dirname); 

//to know the on what file we are in
//console.log(__filename);

//window objects setTimeout,setInterval

/*setTimeout(function(){
    console.log('3 seconds have passed');
},3000)*/
//after 3secs prints output

/*var time = 0;
setInterval(function(){
    time += 2;
    console.log(time + 'seconds have passed');
},2000) */

//for every 2secs it prints ouput by increment tim e by 2

//funct expressions

/*
var sayBye = function(){
    console.log('bye');
}
sayBye();
*/
//fucttion in other funt
 function callFunction(fun){
    fun();
 }
//2nd funt
 /*var sayBye = function(){
    console.log('bye');
}
callFunction(sayBye);*/

//require and module
/*var counter = require('./count')

console.log(counter(['shaun','crystal','ryu']));*/

//module patterns

var stuff = require('./stuff')

console.log(stuff.counter(['shaun','crystal','ryu']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi,5));
