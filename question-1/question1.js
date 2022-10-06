/*
Create a script with a function named lowerCaseWords that takes a mixed array as input.
The function will do the following.
    return a promise that is resolved or rejected
    filter the non-strings and lower case the remaining word
*/

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (mixedArray) =>
    new Promise((myResolve, myReject) => {
        if (!mixedArray || mixedArray.length === 0 || !Array.isArray(mixedArray)) {
            myReject("Not a valid array")
        } else {
            myResolve(mixedArray.filter((item) => isNaN(item)).map((word) => word.toLowerCase()));
        }
    });

lowerCaseWords(mixedArray)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
