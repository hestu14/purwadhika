let x = [40, 100, 1, 5, 25, 10];
console.log(x);
console.log(x.sort());
x.sort(function(a, b) {
    return b - a;
});
console.log(x);
