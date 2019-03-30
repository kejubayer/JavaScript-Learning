var n = 17;

if(n<10){
    console.log("this number",n,"is smaller than 10");
}else if(n<20){
    console.log("this number",n,"is smaller than 20");
}else {
    console.log("this number",n,"is larger than 10/20");
}

//2 3 5 7

var n = 7 ;

if (n<10 && (2 == n || 3 == n || 5 == n || 7 == n)){
    console.log("This number",n,"is smaller than 10 and it's a prime number");
}else if (n<10){
    console.log("This number",n,"is smaller than 10 and it's not a prime number");
} else {
    console.log("This number",n,"is larger than 10");
}