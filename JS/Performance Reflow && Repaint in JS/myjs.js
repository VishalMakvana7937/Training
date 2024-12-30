



// code 1
const t1 = performance.now();
for (let i = 0; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is paragraph " + i;
    document.body.appendChild(para);
}
const t2 = performance.now();
console.log("Time taken by code 1: ", t2 - t1, "milliseconds");


// code 2
const t3 = performance.now();
let mydiv = document.createElement('div');
for (let i = 0; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is paragraph " + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now();
console.log("Time taken by code 2: ", t4 - t3, "milliseconds");

// best code

let fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is paragraph " + i + "XYZ";
    fragment.appendChild(para);
}
document.body.appendChild(fragment);


