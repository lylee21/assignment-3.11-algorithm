// Task 1: To implement bubble sort and return a new sorted array as the result without modifying the array parameter.

//Task 2: To determine the 3 cases of Big O Notation

function bubbleSort(array) {
  //implement code here
  let toBeSortedArray = array;
  for (let i = 0; i < toBeSortedArray.length; i++) {    //O(N)
    for (let j = 0; j < toBeSortedArray.length; j++) {  //O(N)
      if (toBeSortedArray[j] > toBeSortedArray[j+1]) {  //O(NN)
        let temp = toBeSortedArray[j];
        toBeSortedArray[j] = toBeSortedArray[j+1];      
        toBeSortedArray[j+1] = temp;
      }
    }
  }

  return toBeSortedArray;
}

console.log(bubbleSort([35,15,10,25,20,30,5]));

// Big O Notation
// Worse Case: O(NN)
// Average Case: ?
// Best Case: O(N)

module.exports = bubbleSort;
