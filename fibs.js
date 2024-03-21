function fib (num) {
    if (num < 0 || num === 0 || num === undefined) {
      return [];
    } else if (num === 1) {
      return [0];
    }
    let array = [0, 1];
    
    let firstNum = 0;
    let secondNum = 1;
    let thirdNum = 0;
    
    for (let i = 0; i + 2 < num; i++){
      thirdNum = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = thirdNum;
     
      array.push(thirdNum);
      
    }
    return array;
  }