


//Q--1

function calculateDifference(a, b) {

    let num1 = parseFloat(a);
    let num2 = parseFloat(b);


    return num1 - num2;
}

console.log(calculateDifference(10,5))

//Q--1--END//


//Q--2

function isOdd(value) {
    if (value % 2 != 0) {
        return true;
    } else {
        return false;
    }
}


console.log(isOdd(9))

//Q--2--END//

//Q--3


let numbers20 = [20, 50, 40, 60, 10, 90];
function findMin(num10) {
    let min = num10[0];
    for (let i = 1; i < num10.length; i++) {
        if (num10[i] < min) {
            min = num10[i];
        }
    }
    return min;
}


console.log(findMin(numbers20));

//Q--3--End//


//Q--4--star//



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}

console.log(filterEvenNumbers(numbers));

//Q--4---End//


//Q--5---start//

const shortArray = [20, 50, 40, 60, 10, 90];

function sortArrayDescending(array) {
    return array.sort(function(a, b) {
        return b - a;
    });
}

console.log(sortArrayDescending(shortArray));

// Q--5--End




//Q--6--start//


let country = "Bangladesh";

function lowercaseFirstLetter(string) {
    return string[0].toLowerCase() + string.slice(1);
}

console.log(lowercaseFirstLetter(country));



///Q--7--Start--//

let exampleString = "Hello, World!";

function countVowels(string) {
    const vowels = 'aeiouAEIOU';

    return Array.from(string)
        .filter(char => vowels.includes(char))
        .join('');
}

console.log(countVowels(exampleString));

////Q--7---End---//



///Q--8--Start--///

let array = [10, 20, 30, 40, 50];

function findAverage(array) {
    return array.length === 0
        ? 0
        : array.reduce((sum, number) => sum + number, 0) / array.length;
}

console.log(findAverage(array));
