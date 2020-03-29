let x = [40, 100, 1, 5, 25, 10];
x.sort(function(a, b) {
    return a - b;
});
console.log(x[0]);
console.log(x[x.length - 1]);
