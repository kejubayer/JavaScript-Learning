var list = [
    "sat",
    NaN,
    "sun",
    '',
    "mon",
    null,
    "tue",
    ,
    ,
    "wed",
    undefined,
    "thu",
    null,
    "fri"
];

console.log(list);

var  newList = [];

for (i in list){
    if (list[i]){
        newList.push(list[i]);
    }
}

console.log(newList);





