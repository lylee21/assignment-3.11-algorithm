// Task 1: To implement selection sort and return a new sorted array as the result without modifying the array parameter.

//Task 2: To determine the 3 cases of Big O Notation

function selectionSort(array) {
  //implement code here
  let toBeSortedArray = array;
  for (let i = 0; i < toBeSortedArray.length; i++) {
    let minVal = i;
    for (let j = i + 1; j < toBeSortedArray.length; j++) {
      if (toBeSortedArray[j] < toBeSortedArray[minVal]) {
        minVal = j;
    }
  }
    if (i !== minVal) {
      let temp = toBeSortedArray[i];
      toBeSortedArray[i] = toBeSortedArray[minVal];
      toBeSortedArray[minVal] = temp;
    } 
  }
  return toBeSortedArray;
}

// Big O Notation
// Worse Case: ?
// Average Case: ?
// Best Case: ?

console.log(selectionSort([35,15,10,25,20,30,5]));

module.exports = selectionSort;
