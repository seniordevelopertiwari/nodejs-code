const fs=require('fs');
const http=require('http');
console.log("hello");
console.log("hi my name is lekhram");
var a = 23;
var b = 45;
var c = 89;
console.log(a + b + c);
console.log("hi my name is lekhram");
console.warn("hi my name is mukesh kumar");
console.error("hi my name is naresh kumar");
// fundamental of node js
// java script code by using command line and actual tarike se
var q = 12;
let e = 34;
const t = 45;
console.log("the value of the q,e,t is :", q + e + t);
q = 34;
console.log("the value of the t is", q);
e = 56;
console.warn("the value of the e is :", e);
var x = 20;
// what is the difference between == and === in node js
if (x === 20) {
    console.log("matched");
}
// === opetrator check value and its type
// == operator check only its value
var y = '30';// assign a string value 
if (y == 30) {
    console.error("matched");
}
// i am using the for loop
for (i = 0; i < 10; i++) {
    console.log(i);
}
const arr=[2,4,5,6,7,8];// define a array
// console.log("the value of the arr is ", arr);
// console.log(arr[0]);
// console.log(arr[4]);
// //the import function and variable from another file
// let app=require('./app');
// console.log(app);
// console.log(app.x);
// console.log(app.y);
// console.log(app);
// console.log(app.z());
// what is the filter function in node js
// to find a spefic value from the array we use the filter function 
// filter function always run on the array
// what is arrow function
arr.filter((item)=>{
console.log(item);
})
var arr1=[5,7,8,9,90,67,5,5,8];
console.log(arr1);
 var results=arr1.filter((item)=>{
 return item>5;
})
console.log(results);
arr1.filter((item)=>{
    console.log(item);
})
// what is core module : in every programming language some basic feature pahle se hote hai for example
//database se connect karne ke liye. to process a code ,call a api these are called core module
// for example console.log("hi") is a module ,file system,buffer,http these are core module
// two type of module global and non global module
// global module: are those module we do not need to import these are called global module for example
// console.log() is a global module
// non global module we need to import the module these are called non global module
fs.writeFileSync("hello.txt","code step by step");
fs.writeFileSync("hello1.txt","my name is lekhram");
console.log(__dirname);
console.log("--->>>",__dirname);// thses are global module
console.log(__filename);
console.log("->>>",__filename);// thses are a global module
const gs= require('fs').writeFileSync;
gs("code.txt","like and subscribe");
// make a basic server output on browser
//http module to handle the req and resp of the server
http.createServer((req,resp)=>{
resp.write("<h1>my name is lekhram sharma </h1>");
resp.end();
}).listen(4500);
//package .json file in node js
// what is package file it put the  coding related detail of the project for example 
// what is the version of the project,name , git repository kya hai kaun kaun si command use ho rahi hai
// kaun kaun se package dal rakhe hai nodemon package
//all package are manage in packaghe .js file ke ander
// to make the build of the project, run the command 
// package.json file put the code related details
// how to make the package.json file



