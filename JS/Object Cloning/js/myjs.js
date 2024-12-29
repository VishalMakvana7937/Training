// Dynamin nature of object
let obj = {
    name: "Rahul",
    age: 25,
    city: "Delhi",
    "country of birth": "India",
}
console.log(obj);
obj.color = "black"
console.log(obj);

// object cloning

// Spread 
let src = {
    name: "Rahul",
    age: 25,
    city: "Delhi",
    "country of birth": "India",
}
let dest = { ...src };
src.age = 90;
console.log(src);
console.log(dest);

// assing 
let sr = {
    name: "Rahul",
    age: 22,
    city: "Delhi",
    "country of birth": "India",
}
let sr0 = {
    color: "black",
    gender: "male",
}
let des = Object.assign({}, sr, sr0);
sr.age = 80;
console.log(sr);
console.log(des);

// iteration
let ss0 = {
    name: "Rahul",
    age: 25,
    city: "Delhi",
};
let ss1 = {};
for (let key in ss0) {
    let newKey = key;
    let newValue = ss0[key];
    // insert newKey and value in ss1 and create a clone
    ss1[newKey] = newValue;
}
ss0.age = 47;
console.log(ss0);
console.log(ss1);
