function fibsRec(num) {
    if (num === 0) {
      return [0];
    }
    if (num === 1) {
      return [0, 1];
    }
    
    let fibs = fibsRec(num - 1);
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    
    return fibs;
  }
  