var v1 = 1;
var v2 = v1;//shallow copy
v2 = 2;

console.log(v1,v2);

var list = [
    "sat",
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri"
];

var list1 = list;//deep copy

list1[2] = "No day";

console.log(list,list1);
