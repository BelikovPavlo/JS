const sum = (args) => {
    let sum = 0;
  
    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }
  
    return sum;
  };
  
  const result = sum([5, 3, 1, 8, 3]);
  console.log(result);
