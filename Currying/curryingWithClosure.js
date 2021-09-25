console.log('clo');

const multiply = (a) => {
  return (b) => {
    console.log(a * b);
  };
};

const multiplyByThree = multiply(3);
multiplyByThree(4);