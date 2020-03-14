var x = [1, 2, 3, 2, 5, 2, 7, 2];

const getMean = array => {
    let sum = 0;
    array.forEach(num => {
        sum += num;
    });
    const mean = sum / array.length;
    return mean;
};

console.log(getMean(x));
