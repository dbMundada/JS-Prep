function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      // console.log(arr);
      if (arr[j] < arr[j-1]) {
        let tmp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = tmp;
      }
    }
  }

  return arr;
}


function inesertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }
  return arr;
}


/* Selection Sort implementation in JavaScript */
function selectionSort(arr) {
    /* advance the position through the entire array */
    /*   (could do i < n-1 because single element is also min element) */
    for (var i = 0; i < arr.length - 1; i++) {
        var currentMin = i;

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[currentMin])
              currentMin = j; // found new minimum; remember its index
        }

        //if the current_Min is equal to i, then it is in right position already
        if (currentMin != i) {
            //Swap the values
            tmp = arr[i];
            arr[i] = arr[currentMin];
            arr[currentMin] = tmp;
        }
    }
    return arr;
}

const arr = [1, 5, 8, 2, 7, 11, 4, 9];
// console.log(bubbleSort(arr));
console.log(inesertionSort(arr));
