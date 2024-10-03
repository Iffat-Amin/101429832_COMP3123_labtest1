function lowerCaseWords(arr) {
    new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject("Input must be an array");
        } else {
            const result = arr
                .filter(item => typeof item === 'string')  // filter non-strings
                .map(item => item.toLowerCase());  // lowercase remaining words
            resolve(result);
        }
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
}

const mixedArray=["HELLO",19,"PIZZA",true,"WINGS",false]
console.log(lowerCaseWords(mixedArray));

