// The Calculator
//
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

var squareNumber = function (num1) {
  squareNumber = num1 * num1;
  console.log(squareNumber);
}

var halfNumber = function (num1) {
  halfNumber = num1 / 2;
  console.log(halfNumber);
}

var percentOf = function (num1, num2) {
  percentOf = (num1 / num2) * 100;
  console.log(num1 + " is " + percentOf + "% of " + num2);
}

var areaOfCircle = function (radius) {
  areaOfCircle = (Math.PI * (radius * radius)).toFixed(2);
  console.log("The area for a circle with radius " + radius + " is " + areaOfCircle);
}

var superCal = function (num1) {
  halfNumber = num1 / 2;
  squareNumber = halfNumber * halfNumber;
  areaOfCircle = (Math.PI * (squareNumber * squareNumber)).toFixed(2);
  percentOf = ((areaOfCircle / squareNumber) * 100).toFixed(2);
  console.log("The area of " + areaOfCircle + " is " + percentOf + "% " + "of the squared result " + squareNumber);
}
