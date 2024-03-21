function mergeSort (arr) {
    if (arr.length <= 1) {
      return arr;
    }
      let midpoint = Math.floor(arr.length / 2);
      let leftArr = arr.slice(0 , midpoint);
      let rightArr = arr.slice(midpoint);
      
      mergeSort(leftArr);
      mergeSort(rightArr);
      
      return merge(leftArr, rightArr);
  }
  
  
  function merge (left, right) {
    let array = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
      let element1 = left[leftIndex];
      let element2 = right[rightIndex];
      if (element1 <= element2) {
        array.push(element1);
        leftIndex++;
      } else {
        array.push(element2);
        rightIndex++;
      }
    }
    while (leftIndex < left.length) {
      array.push(left[leftIndex]);
      leftIndex++;
    }
    while(rightIndex < right.length){
      array.push(right[rightIndex]);
      rightIndex++;
    }
   return array;
  }