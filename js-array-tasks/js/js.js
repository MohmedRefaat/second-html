// NOTE: ******* you should let arr1 uncommented & try every task alone


// /***************************************************8
// task 1
// Try to declare an array in 4 different ways, to contain the following 5 elements (200, "Ahmed", "Hi", true, false, "M", "css", "Hi");
// */
// // *******1
var arr1 = [200, "Ahmed", "Hi", true, false, "M", "css", "Hi"];
console.log(arr1);
//

/*
// *******2

var arr2 = new Array();

arr2[0] = 200;
arr2[1] = "Ahmed";
arr2[2] = "Hi";
arr2[3] = "true";
arr2[4] = "false";
arr2[5] = "M";
arr2[6] = "css";
arr2[7] = "Hi";
console.log(arr2);


//**********3

var arr3 = [];

arr3[0] = 200;
arr3[1] = "Ahmed";
arr3[2] = "Hi";
arr3[3] = "true";
arr3[4] = "false";
arr3[5] = "M";
arr3[6] = "css";
arr3[7] = "Hi";
console.log(arr3);



//  ******* 4

var arr4 = [200,
  "Ahmed",
  "Hi",
  "true",
  "false",
  "M",
  "css",
  "Hi"
]
console.log(arr4);
*/

/* ************************************8
task 2:
Check if your variable is an array or not in 2 different ways, and print the result on console;
*/

//******* way no: 1
// if (Array.isArray(arr1)) {
//   console.log("arr1 is an array");
// }
// else {
//   console.log("arr1 is not an array");
// }
//******* way no: 2
// if (arr1.constructor === Array) {
//   console.log("arr1 is an array");
// }
// else {
//   console.log("arr1 is not an array");
// }


/* **************************************************8
task:3
find a way to print the length of this array on console;
*/

// console.log("the length of arr1: " + arr1.length);

/*
task 4************************************8
Show the last index of element "Hi" in ur array, and print ur array;
*/
// lastIndexOf start searching from the end of the arr1
// console.log("the last index of element Hi is: " + arr1.lastIndexOf("Hi"));
// console.log(arr1);
// //

/*
task 5:************************************8
Show the first index of element "Hi" in ur array, and print ur array;
*/
// indexOf start searching from the begining of the arr1
//
// console.log("the first index of element Hi is: " + arr1.indexOf("Hi"));
// console.log(arr1);
//

/*
task 6:************************************8
convert your array to string in 2 different ways, and console it;
*/
// console.log(arr1.toString());

/*
task 7:************************************8
Try to remove 4 elements from ur array at indices 0,3,4, and the last one is at the end;
*/

// arr1.splice(3, 2); //splice(start index, no of elements you want to remove, items you want to add)remove or add elements
// arr1.shift(); //shift() remove from the begining of an array
// arr1.pop();// pop() remove the last item of an array
// console.log(arr1);

/*
task 8:************************************8
Try to add 3 string elements to ur array one at the beginning, one at index 2, and the last one at the end.
       note: try to use a different way for each element;
*/
// arr1.unshift("index 0");// unshift() add  elements at the begining of an array
// console.log(arr1);
// arr1.splice(2,0,"index 2");
// console.log(arr1);
// arr1.push("last item");//push() add items to an array at the end of an array
// console.log(arr1);


/*
task 9:************************************8
Try to rearrange ur array alphabetically, and print ur new array;
*/
//
// arr1.sort();//sort() rearrange an array alphabetically
// console.log(arr1);


/*
tasl 10:************************************8
Try to reverse ur array elements and print ur new array;
*/

// arr1.reverse()//reverse() reverse the rearrangement of an array
// console.log(arr1);



/*
task 11:************************************8
 define two arrays and combine them;
*/
//
// var ar1 = ['mohamed','ahmed','ali'];
// var ar2 = ['youssef', 'mahmoud'];
//
// console.log(ar1.concat(ar2)); // Array1.concat(Array2) combine to arrays
