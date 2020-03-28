let date = new Date();
let month = date.getMonth();
let displayMonth = "Saat ini bulan ";

if (month === 0) {
    displayMonth += `${month} : Januari`;
}

if (month === 1) {
    displayMonth += `${month} : Februari`;
}

if (month === 2) {
    displayMonth += `${month} : Maret`;
}

if (month === 3) {
    displayMonth += `${month} : April`;
}

if (month === 4) {
    displayMonth += `${month} : Mei`;
}

if (month === 5) {
    displayMonth += `${month} : Juni`;
}

if (month === 6) {
    displayMonth += `${month} : Juli`;
}

if (month === 7) {
    displayMonth += `${month} : Agustus`;
}

if (month === 8) {
    displayMonth += `${month} : September`;
}

if (month === 9) {
    displayMonth += `${month} : Oktober`;
}

if (month === 10) {
    displayMonth += `${month} : November`;
}

if (month === 11) {
    displayMonth += `${month} : Desember`;
}

console.log(displayMonth);

// a simple way is using array
// we will learn about Array in session 6

let months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
];

let currentMonth = `Saat ini bulan ${month} : ${months[month]}`;

console.log(currentMonth);
