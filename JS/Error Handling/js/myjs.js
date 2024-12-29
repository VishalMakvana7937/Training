// error type
// 1. Compile time error
// 2. Runtime error

// try catch

try {
    console.log(x);
} catch (error) {
    console.log('Error...', error);
    console.log('Somthing went wrong');
}

// finally block
try {
    console.log('i am redy to throw an error');
} catch (error) {
    console.log('Error...', error);
    console.log('Somthing went wrong');
} finally {
    console.log('This will run regardless of the error');
}

// customer error handeling
throw new Error('Something went wrong');

const errorCode = 100;
if (errorCode == 100) {
    throw new Error('Invalid user name');
}