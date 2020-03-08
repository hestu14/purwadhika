var date = new Date();

console.log("Cara pertama:");
console.log(
    "Hari ini tanggal " +
        date.getDate() +
        "-" +
        date.getMonth() +
        "-" +
        date.getFullYear()
);
console.log(
    "Besok tanggal " +
        (date.getDate() + 1) +
        "-" +
        date.getMonth() +
        "-" +
        date.getFullYear()
);
console.log(
    "Kemarin tanggal " +
        (date.getDate() - 1) +
        "-" +
        date.getMonth() +
        "-" +
        date.getFullYear()
);

console.log("\nCara kedua:");

let timestamp = date.getTime();

// konversi waktu 1 hari = 9.64e+7 milisecond
// https://www.google.com/search?q=day+to+milisecond&oq=day+to+mili&aqs=chrome.1.69i57j0l7.19543j0j7&sourceid=chrome&ie=UTF-8

let today = timestamp;
let tomorrow = timestamp + 8.64e7;
let yesterday = timestamp - 8.64e7;

console.log("Hari ini " + new Date(today).toDateString());
console.log("Besok " + new Date(tomorrow).toDateString());
console.log("Kemarin " + new Date(yesterday).toDateString());
