function SliceArr(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let firstSideArr = []
    let secondPartArr = []
  
    const middle = Math.floor(arr.length / 2);
  
    for(i = 0; i < middle; i++){
      firstSideArr.push(arr[i])
    }
    for(i = middle; i < arr.length; i++){
      secondPartArr.push(arr[i])
    }
  
    if(firstSideArr > 1 || secondPartArr > 1){
      return mergeSort(SliceArr(firstSideArr), SliceArr(secondPartArr))
    }
  
  return mergeSort(SliceArr(firstSideArr), SliceArr(secondPartArr));
}

function mergeSort(left, right) {
    const result = [];
    let left = 0;
    let right = 0;
  
    while (left < left.length && right < right.length) {
      if (left[left] < right[right]) {
        result.push(left[left]);
        left++;
      } else {
        result.push(right[right]);
        right++;
      }
    }
  
    while (left < left.length) {
      result.push(left[left]);
      left++;
    }
    while (right < right.length) {
      result.push(right[right]);
      right++;
    }
  
    return result;
}

const arrSort = SliceArr([11, 104, 3, 10, 23, 156, 65])
console.log(arrSort)
