const multiply = (x,y) => {
    console.log(x * y)
}

const multiplyByFive = multiply.bind(this,5);
multiplyByFive(3);


const multiplyByTen = multiply.bind(this,7);
multiplyByTen(3)