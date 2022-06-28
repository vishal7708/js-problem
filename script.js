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



