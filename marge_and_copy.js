/*
var list = [
    "sat",
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri"
];

//var list2 = list.slice();

//var list2 = Array.from(list);//old version

var list2 = [...list];//latest version es6

list2[2] ="No day";

console.log(list,list2);*/



//marge

var list1 = [
    "sat",
    "sun",
    "mon",
    "tue"
];
var list2 = [
    "wed",
    "thu"
];

var list3 = [
    "fri"
];



//var list = list1.concat(list2).concat(list3);

//var list = [].concat(list1,list2,list3);

var list = list1.concat(list2,list3);

console.log(list);






