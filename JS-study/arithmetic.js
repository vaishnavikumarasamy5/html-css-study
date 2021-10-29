function CheckIsNumber(input) {
  if (typeof input !== "number") {
    throw "given value is not in number";
  }
  return true;
}

//sum of two numbers

let sum = (a, b) => {
  CheckIsNumber(a);
  CheckIsNumber(b);
  return a + b;
};
console.log("sum of two number is,", sum(23, 9));

//subraction of two numbers

let subraction = (a, b) => {
  CheckIsNumber(a);
  CheckIsNumber(b);
  return a - b;
};
console.log("subraction of two number is,", subraction(5, 6));

//multiplication of two numbers

let multiple = (a, b) => {
  CheckIsNumber(a);
  CheckIsNumber(b);
  return a * b;
};
console.log("multiple of two number is,", multiple(6, 9));

//division of two numbers

let division = (a, b) => {
  CheckIsNumber(a);
  CheckIsNumber(b);
  return a / b;
};
console.log("division of two number is,", division(56, 9));
