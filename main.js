

// Question one //
function sumObjectValues(obj) {
    let sum = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum;
}

let myObject = {
    a: 10,
    b: 'hello',
    c: 20,
    d: true,
    e: 30
};

let result = sumObjectValues(myObject);
console.log(result);


// Question two //

function asyncBlock1() {
    console.log("Async Block 1: Start");
    setTimeout(function() {
        console.log("Async Block 1: End");
        asyncBlock2();
    }, 2000);
}

function asyncBlock2() {
    console.log("Async Block 2: Start");
    setTimeout(function() {
        console.log("Async Block 2: End");
        asyncBlock3();
    }, 2000);
}

function asyncBlock3() {
    console.log("Async Block 3: Start");
    setTimeout(function() {
        console.log("Async Block 3: End");
    }, 2000);
}
asyncBlock1();

//Question three //

function getMaxValueAndIndex(numbers) {
    if (numbers.length === 0) {
        return null; // Return null if the array is empty
    }

    let max = numbers[0];
    let maxIndex = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
            maxIndex = i;
        }
    }

    return { value: max, index: maxIndex };
}

const numbers = [5, 8, 2, 10, 3];
const result = getMaxValueAndIndex(numbers);

if (result !== null) {
    console.log(`Maximum value: ${result.value}`);
    console.log(`Index: ${result.index}`);
} else {
    console.log("The array is empty.");
}

//Question four //
function dateDifferenceInDays(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const dayDifference = Math.abs(secondDate.getDate() - firstDate.getDate());

    return dayDifference;
}

const date1 = '2021-09-15';
const date2 = '2021-09-20';

const difference = dateDifferenceInDays(date1, date2);
console.log(`The difference is ${difference} days.`);


 //Question six //
 function getMultipleValues() {
     return [1, 'hello', true];
 }

 const [num, greeting, flag] = getMultipleValues();

 console.log(num);
 console.log(greeting);
 console.log(flag);



 //Question seven//
 function reverseArray(arr) {
     return arr.reverse();
 }
 const reversedArray = reverseArray([1, 2, 3, 4]);
 console.log(reversedArray);



 // Question eight //
 function objectToArray(obj) {
     return Object.entries(obj);
 }

const result = objectToArray({ a: 1, b: 2 });
console.log(result);

//Bonus //
// 1 //
function convert12To24(time12) {
    const [time, period] = time12.split(' ');

    let [hours, minutes] = time.split(':');
    hours = parseInt(hours, 10);

    if (period.toLowerCase() === 'pm' && hours !== 12) {
        hours += 12;
    } else if (period.toLowerCase() === 'am' && hours === 12) {
        hours = 0;
    }

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.padStart(2, '0');

    return `${hours}:${minutes}`;
}

const time24 = convert12To24('03:30 PM');
console.log(time24); // Output: "15:30"

//2//
function add(x) {
    return function(y) {
        return x + y;
    };
}

var a = add(2)(3);

console.log(a);