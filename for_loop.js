/*
var i;
for (i=1;i<10;i+=2){
    console.log(i);
}*/

/*var i,j;
for (i=0,j=10;i<=10;i++,j--){
    console.log(i,j)
}*/

//factorial
/*var n = 4;
var factorial = 1;
var i;
for (i=n;i>1;i--){
    //factorial = factorial*i;
    factorial*=i;
}
console.log("Factorial of",n,"is",factorial);*/
// 1-10 factorial

/*var i;
var factorial = 1;
for (i=1;i<=10;i++){
    factorial*=i;
    console.log("Factorial of",i,"is",factorial);
}*/

//series
// s1 = 2, 4, 6, 8, 10, 12, 14, 16, 18 ......

/*var series = " ";
var n;
for (i=1;i<10;i++){
    n=i*2;
    series=series+n+" ";
}
console.log(series);*/

//S2 = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28 , .....

/*var series = "1, ";
var n = 1;

for (var i=1;i<10;i++){
    n=n+3;
    series=series+n+", ";
}
console.log(series);*/

//s3 = 0, 3, 8, 15, 24, 35, 48, 63, 80,.....

/*
var series = "";
for (var i=1;i<10;i++){
    n=i*i-1;
    series=series+n+", ";
}
console.log(series);
*/

//s4 = 1, 4, 3, 8, 5, 12, 7, 16, 9,......

/*var series = "";
for (var i=1;i<10;i++){
    n=i;
    if (n%2==0){
        n=i*2;
    }
    series=series+n+", ";
}
console.log(series);*/

// s5 = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55,.....

/*var series = "0, 1, ";
var n;
var x = 0;
var y = 1;

for (var i=1;i<10;i++){
    n = x + y;
    x = y;
    y = n;

    series=series+n+", ";
}
console.log(series);*/

// multiplication-table

/*var series;
for (var i=1;i<10;i++){
    series= i +" = ";
    for (var j=1;j<10;j++){
        series+= i*j + " ";
    }
    console.log(series);
}*/

//divisors

var n = 500 ;
var range = Math.ceil(Math.sqrt(n));
var divisors = "";

for (var i=1;i<=range;i++){
    if (n%i==0){
        if (i==n/i){
            divisors+=i+" ";
        }else {
            divisors+=i+" "+(n/i)+" ";
        }
    } 
}
console.log(divisors);





















































































