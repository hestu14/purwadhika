let date = new Date();
let currentMonth = date.getMonth();
let currentDay = date.getDay();
let currentDate = date.getDate();
let currentYear = date.getFullYear();
let displayMonth = "";

if (currentMonth === 0) {
    displayMonth = "Januari";
}

if (currentMonth === 1) {
    displayMonth = "Februari";
}

if (currentMonth === 2) {
    displayMonth = "Maret";
}

if (currentMonth === 3) {
    displayMonth = "April";
}

if (currentMonth === 4) {
    displayMonth = "Mei";
}

if (currentMonth === 5) {
    displayMonth = "Juni";
}

if (currentMonth === 6) {
    displayMonth = "Juli";
}

if (currentMonth === 7) {
    displayMonth = "Agustus";
}

if (currentMonth === 8) {
    displayMonth = "September";
}

if (currentMonth === 9) {
    displayMonth = "Oktober";
}

if (currentMonth === 10) {
    displayMonth = "November";
}

if (currentMonth === 11) {
    displayMonth = "Desember";
}

let dayName = "";

if (currentDay === 0) {
    dayName = "Senin";
}

if (currentDay === 1) {
    dayName = "Selasa";
}

if (currentDay === 2) {
    dayName = "Rabu";
}

if (currentDay === 3) {
    dayName = "Kamis";
}

if (currentDay === 4) {
    dayName = "Jumat";
}

if (currentDay === 5) {
    dayName = "Sabtu";
}

if (currentDay === 6) {
    dayName = "Minggu";
}

console.log(
    `Hari ini ${dayName}, ${currentDate} ${displayMonth} ${currentYear}`,
    `\nPukul ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
);
