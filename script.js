let myArray = ["apples", "bananas", "oranges", "avocados", "magoes"];
console.log("Original Array:", myArray);

let firstElement = myArray[0];
let lastElement = myArray[myArray.length - 1];
let middleElement = myArray[Math.floor(myArray.length / 2)];

console.log("First Element:", firstElement);
console.log("Middle Element:", middleElement);
console.log("Last Element:", lastElement);

console.log("Array Length:", myArray.length);

myArray.push("kiwi");
console.log("After push():", myArray);

myArray.shift();
console.log("After shift():", myArray);

myArray.unshift("pear");
console.log("After unshift():", myArray);

myArray.splice(2, 1, "cherry");
console.log("After splice():", myArray);

console.log("For Loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log("forEach Loop:");
myArray.forEach(function(item, index) {
    console.log(`${index}: ${item}`);
});

const [first, second, ...rest] = myArray;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest of the array:", rest);