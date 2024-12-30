

// async / await 

async function myFunction() {
    setTimeout(() => {
        console.log('i am inside set Timeout block');
    }, 5000);
}
myFunction();

// Fetch api
async function fetchapi() {
    // get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // parse json - async
    let data = await response.json();
    console.log('Api data..!', data);

}
fetchapi();




const myHeader = new Headers();
myHeader.append('Content-Type', 'application/json');

const url = 'https://jsonplaceholder.typicode.com/posts';

const options = {
    method: 'POST',
    body: JSON.stringify({ username: "example" }),
    headers: myHeader  // Corrected this line
}

async function myApi() {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("My api data..!", data);
}

myApi();