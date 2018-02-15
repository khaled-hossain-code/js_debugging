let _ = require("lodash");

let numbers = [1, 2, 3, 4, 5];

let sumOfEvenSquares = _.chain(numbers)
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .sum()
  .value();

// sumOfEvenSquares: 20
