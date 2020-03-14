const fibo = urut => {
    if (urut < 3) {
        return 1;
    } else {
        return fibo(urut - 1) + fibo(urut - 2);
    }
};
console.log(fibo(6));
