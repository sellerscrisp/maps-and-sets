// Q1: What does the following code return?
new Set([1, 1, 2, 2, 3, 4]);
// {1, 2, 3, 4}

// Q2: What does the following code return?
// [...new Set("referee")].join("")
const refDone = [...new Set('referee')].join(''); // "ref"

// Q3: What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

/* 
  hasDuplicate:
    Write a function called hasDuplicate which accepts an array and returns 
    true or false if that array contains a duplicate.
*/
const hasDuplicate = (arr) => new Set(arr).size != arr.length;

const a = hasDuplicate([1, 3, 2, 1]); // true
const b = hasDuplicate([1, 5, -1, 4]); // false

/*
  vowelCount:
    Write a function called vowelCount which accepts a string and returns
    a map where the keys are numbers and the values are the count of the 
    vowels in the string.
*/
function checkVowel(c) {
  return 'aeiou'.has(c);
}

function vowelCount(str) {
  const vowelMap = new Map();
  for (let c of str) {
    let lowerCased = c.toLowerCase();
    if (checkVowel(lowerCased)) {
      if (vowelMap.has(lowerCased)) {
        vowelMap.set(lowerCased, vowelMap.get(lowerCased) + 1);
      } else {
        vowelMap.set(lowerCased, 1);
      }
    }
  }

  return vowelMap;
}

const c = vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
const d = vowelCount('Colt'); // Map { 'o' => 1 }
