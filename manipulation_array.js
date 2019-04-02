var myList = ["apple","banana","plum"];

myList.push("grave");//last add
myList.unshift("mango");//first add

console.log(myList.length);
var firstElement = myList.shift();//first delete and it's return the element
var lastElement = myList.pop();//last delete and it's return the element
console.log(myList.length);
console.log(myList);
console.log(firstElement);
console.log(lastElement);