// extractValue accepts an array of objects and a key and returns a new array with the value of each object at the key
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

function extractValue(arr, key){
    return arr.reduce(function(first, people){ // reduce is used to extract information from parameters and add them to a new array.
        first.push(people[key]); // push creates a new array
        return first;
    }, []);
}

console.log(extractValue(arr,'name')); // ['Elie', 'Tim', 'Matt', 'Colt']



// vowelCount - accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string.
function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(first, people){
        let lowerCase = people.toLowerCase() // put it to lower case to make sure entry is case insensitive
        if(vowels.indexOf(lowerCase) !== -1){
            if(first[lowerCase]){
                first[lowerCase]++; // adds to array if contains vowels in string
            } else {
                first[lowerCase] = 1;
            }
        }
        return first;
    }, {});
}
console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};
console.log(vowelCount('Matt')); // {a:1})
console.log(vowelCount('hmmm')); // {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};


// addKeyAndValue accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(first, people, idx){
        first[idx][key] = value;
        return first;
    }, arr);
}
console.log(addKeyAndValue(arr, 'title', 'Instructor'));
//[
//     {title: 'Instructor', name: 'Elie'},
//     {title: 'Instructor', name: 'Tim'},
//     {title: 'Instructor', name: 'Matt'},
//     {title: 'Instructor', name: 'Colt'}
//   ]



// partition accepts an array and a callback and returns an array with two arrays inside of it. The partition should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If false, placed in second subarray.
function isEven(val){
    return val % 2 === 0;
  }

const newArr = [1,2,3,4,5,6,7,8];

function partition(newArr, parts){
    return newArr.reduce(function(first, people){
        if(parts(people)){
            first[0].push(people);
        } else {
            first[1].push(people);
        }
        return first;
    }, [[],[]]);
}
console.log(partition(newArr, isEven)) // // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }

const names = ['Elie', 'Colt', 'Tim', 'Matt'];

console.log(partition(names, isLongerThanThreeCharacters)); // [['Elie', 'Colt', 'Matt'], ['Tim']]