const resolvedPromise = () => {
    new Promise((resolve) => {
        setTimeout(() => {
            let success = { message: 'delayed success!' };
            resolve(success);
        }, 500);
    })
    .then(result => console.log(result))  
    .catch(error => console.error(error));
};


const rejectedPromise = () => {
    new Promise((_, reject) => { 
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    })
    .then(result => console.log(result))
    .catch(error => console.error(error));  
};


console.log(resolvedPromise());   
console.log(rejectedPromise());   
