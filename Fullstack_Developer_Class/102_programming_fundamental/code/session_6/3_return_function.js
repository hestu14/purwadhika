function total(x, y) {
    z = x + y;
    return z;
}
console.log(total(4, 5));
console.log(z);

let hasil = total(3, 3);

if (hasil > 3) {
    console.log(`Hasil ${hasil}`);

    hasil = hasil * total(3,2);
    console.log(`Hasil ${hasil}`);
}
