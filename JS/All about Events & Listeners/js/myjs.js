// All about Events & Listeners


// Event Target 
// The target of an event is the element that triggered the event.




function changeText(event) {
    console.log(event);
    let fpara = document.getElementById('fpera')
    fpara.textContent = 'Hello, World!'
}

let fpara = document.getElementById('fpera');
fpara.addEventListener('click', changeText);
// fpara.removeEventListener('click', changeText);

let anchorElement = document.getElementById('anchor');

anchorElement.addEventListener('click', function (event) {
    event.preventDefault();
    anchorElement.textContent = 'Click here!'
})



let paras = document.querySelectorAll('p');
function alertpara(event) {
    alert('You clicked on paragraph ' + event.target.textContent)
}
for (let i = 0; i < paras.length; i++) {
    let para = paras[i];
    para.addEventListener('click', alertpara)
}
