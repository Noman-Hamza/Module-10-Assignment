


//Q--1

function calculateDifference(a, b) {

    let num1 = parseFloat(a);
    let num2 = parseFloat(b);


    return num1 - num2;
}


let result = calculateDifference(10, 5);
console.log(result);


//Q--1--END//


//Q--2

function isOdd(value) {
    if (value % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

let result2 = isOdd(9);
console.log(result2);

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
const evenNumbers = filterEvenNumbers(numbers);

function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}

console.log(evenNumbers);


//Q--4---End//


//Q--5---start//

const shortArray = [20, 50, 40, 60, 10, 90];
const descendingArray = sortArrayDescending(shortArray);

function sortArrayDescending(shortArray){

    return shortArray.sort(function(a, b) {
        return b - a;
    });
}

console.log(descendingArray);

//Q--5--End //


//Q--6--start//


let country = "Bangladesh";

function lowercaseFirstLetter() {
    country = country[0].toLowerCase() + country.slice(1);
}

lowercaseFirstLetter();

console.log(country);


//Q--6--End--//


///Q--7--Start--//

let exampleString = "Hello, World!";

function getVowels() {
    const vowels = 'aeiouAEIOU';


    exampleString = Array.from(exampleString)
        .filter(char => vowels.includes(char))
        .join('');
}


getVowels();

console.log(exampleString);



////Q--7---End---//



///Q--8--Start--///

let array = [10, 20, 30, 40, 50];

function findAverage() {

    array = array.length === 0
        ? 0
        : array.reduce((sum, number) => sum + number, 0) / array.length;
}


findAverage();


console.log(array);




