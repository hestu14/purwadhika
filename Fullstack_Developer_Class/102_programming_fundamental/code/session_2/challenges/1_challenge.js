let x = 4;
let y = 3;
let z = 2;

// https://devdocs.io/javascript/global_objects/math/pow
//let w = Math.pow((x + y * z) / (x * y), z);

let w = ((x + y * z) / (x * y)) ** z;

console.log(w);
