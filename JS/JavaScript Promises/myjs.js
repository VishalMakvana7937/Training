

// promise
// a promise is a value that may not be available yet, but will be resolved at some point
// resolve
// reject
// then
// catch
// finally

let fpromise = new Promise((resolve, reject) => {
    // resolve(1001);
    // reject('internal server error');
    setTimeout(function sayMyName() {
        console.log(' My name is Ravi');

    }, 5000);
    resolve(1);
})

let promise0 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise Fulfilled");
    }
    else {
        reject("Promise Rejected");
    }

})

promise0.then((msg) => {
    console.log('The massage is.!', msg);
}).catch((err) => {
    console.log('Error is.!', err);
})