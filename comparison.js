/*var n = 17;

if(n<10){
    console.log("this number",n,"is smaller than 10");
}else if(n<20){
    console.log("this number",n,"is smaller than 20");
}else {
    console.log("this number",n,"is larger than 10/20");
}*/

//2 3 5 7

/* var n = 7 ;

if (n<10 && (2 == n || 3 == n || 5 == n || 7 == n)){
    console.log("This number",n,"is smaller than 10 and it's a prime number");
}else if (n<10){
    console.log("This number",n,"is smaller than 10 and it's not a prime number");
} else {
    console.log("This number",n,"is larger than 10");
} */
/*
var n = -5 ;
var result ;

if (n > 0){
    result = "This number " +n+ " is positive";
}else {
    result = "This number " +n+ " is negative";
}

console.log(result);
*/
// even or odd
/*
var n = 0;
var result ;
var remainder = n % 2 ;

if (0 == n){
    result = "This is a neutral number";
}else if (0 == remainder){
    result = "This number "+n+" is even";
} else {
    result = "This number "+n+" is odd";
}

console.log(result);
*/

// movie ratting
// var movieRating = "r";
// var age = 2;
//var result ;

 /*
 if ("pg"==movieRating && age >= 13){
   result = "You can watch this movie pg";

 }else if ("r"==movieRating && age >= 18){
     result = "You can watch this movie r";
 }else if ("g"==movieRating){
     result = "You can watch this movie g";
 }else {
     result = "You can not watch this movie";
 }
 console.log(result);
 */

 /*

if (("pg"==movieRating && age >= 13) || ("r"==movieRating && age >= 18) || ("g"==movieRating) ){
    result = "You can watch this movie";
}else {
    result = "You can not watch this movie";
}
console.log(result);
*/

 //age verification
/*
var yourAge = 300;
var result ;

if (0>=yourAge || 200 < yourAge){
    result = "vampire";
}else if (1>=yourAge){
    result = "baby";
}else if (3>=yourAge){
    result ="toddler";
}else if (12>=yourAge){
    result ="kid";
}else if (18>yourAge){
    result ="teenager";
}else if (18<=yourAge){
    result ="adult";
}
console.log("You are a/an",result);
*/

// ternary operator

var n = -5;
var result;
var remainder = n % 2;
result=(0 == remainder) ? "even":"odd";
console.log("This number is",result);
result=(0 > n) ? "negative":"positive";
console.log("This number is",result);












































