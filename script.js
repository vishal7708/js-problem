//1. Check if a number is odd or even in JavaScript

function isOddOrEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is a even number`)
    } else {
        console.log(`${num} is a odd number`)

    }
}

isOddOrEven(20);
isOddOrEven(19);


// 2. Check if input variable is a number or not


function isnumber(num) {
    if (isNaN(num)) {
        console.log(`${num} is not a number`)
    } else {
        console.log(`${num} is a number`)

    }
}

isnumber('Vishal');
isnumber(10);
//isNaN() first convert the value in number before testing it.
isnumber('15')



//3. Find the largest of two number

function findLargest(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`)
    } else if (num1 < num2) {
        console.log(`${num2} is greater than ${num1}`)
    } else {
        console.log(`${num1} and ${num2} is equal`)
    }
}

findLargest(21, 30);
findLargest(40, 21);
findLargest(10, 10);

// 4. Find the largest of three number

function greaterInThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} is greater than ${num2} and ${num3}`);
    } else if (num2 > num1 && num2 > num3) {
        console.log(`${num2} is greater than ${num1} and ${num3}`);
    } else if (num3 > num1 && num3 > num2) {
        console.log(`${num3} is greater than ${num1} and ${num2}`);
    } else {
        console.log(`${num1} ${num2} and ${num3} are equal`);
    }
}


// 5. Check if a triangle is equilateral, scalene, or isosceles

function typeOfTriangleType(side1, side2, side3) {
    if ((side1 === side2 ) && (side1 === side3)) {
        console.log('Equilateral trangle')
    } else if ((side1 === side2) || (side2 === side3)) {
        console.log('Isosceles trangle')
    } else {
        console.log('Scalene trangle')

    }
}

typeOfTriangleType(120, 120, 120);

// 6. Find the a number is present in given range

function findInRange(num, start, end) {
    if ((num >= start) && (num <= end)) {
        console.log(`${num} is between the range of ${start} and ${end}`)
    } else {
        console.log(`${num} is outside of range`);
    }
}

findInRange(19, 20, 40);

// 7. Perform arithmetic operations on two numbers
//prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.
/*
Print result of num1+num2 if operation is “add”
Print result of num1-num2 if operation is “subtract”
Print result of num1*num2 if operation is “multiply”
Print result of num1/num2 if operation is “divide”
Print result of num1%num2 if operation is “modulus”
Else print “Invalid operation”

*/

function evalNumbers (num1, num2, op) {
    if (op == 'add') {
        console.log(`Sum of ${num1} and ${num2} is ${num1 + num2}`)
    } else if (op == 'substraction') {
        console.log(`Difference of ${num1} and ${num2} is ${num1 - num2}`)

    } else if (op == 'multiply') {
        console.log(`multiplication of ${num1} and ${num2} is ${num1 * num2}`)

    } else if (op == 'divide') {
        console.log(`divide of ${num1} and ${num2} is ${num1 / num2}`)

    } else if (op == 'modulus') {
        console.log(`modulus of ${num1} and ${num2} is ${num1 % num2}`)

    } else {
        console.log('Please enter any number')
    }
}


evalNumbers(21, 9, 'add');
evalNumbers(21, 9, 'modulus');


//8. Find check if a year is leap year or not

function checkLeapYear(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`year ${year} is a leap Year`)
    } else {
        console.log(`year ${year} is not a leap Year`)

    }
}

checkLeapYear(2020);