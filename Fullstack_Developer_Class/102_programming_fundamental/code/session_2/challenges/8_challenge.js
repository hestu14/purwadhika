/*
    Jarak mobil A & B = 120 km.
    A berjalan 60km/h dari timur.
    B berjalan 40km/h dari barat.
    A & B start pukul 9 WIB.

    Jam brp A & B bertabrakan? 
*/

let carA_Speed = 60; // A berjalan 60km/h dari timur.
let carB_Speed = 40; // B berjalan 40km/h dari barat.
let distanceBetweenCar = 120; // dalam satuan km

let carAStartAt = 9; // jam 9
let carBStartAt = 9; // jam 9

let speedRatio = 3 / 2; // ~ 60 : 40
let totalRatio = 3 + 2;

let carA_CrashInKilometer = (3 / totalRatio) * distanceBetweenCar;
let carB_CrashInKilometer = (2 / totalRatio) * distanceBetweenCar;

console.log(
    "Mobil A berangkat dari arah timur menuju barat dengan kecepatan 60 km/jam",
    "\ndan Mobil B berangkat dari arah barat menuju timur dengan kecepatan 40 km/jam"
);

console.log(
    "Kecelakaan mobil A terjadi pada kilometer ke: " + carA_CrashInKilometer
);
console.log(
    "Kecelakaan mobil B terjadi pada kilometer ke: " + carB_CrashInKilometer
);

let minute = 60; // ~ 1 hour
let carA_CrashInMinutes = (carA_CrashInKilometer / carA_Speed) * minute;
let carB_CrashInMinutes = (carB_CrashInKilometer / carB_Speed) * minute;

console.log("Kecelakaan mobil A terjadi pada menit ke: " + carA_CrashInMinutes);
console.log("Kecelakaan mobil B terjadi pada menit ke: " + carB_CrashInMinutes);

let carCrashIn =
    Math.floor(carA_CrashInMinutes / 60 + carAStartAt) +
    ":" +
    (carA_CrashInMinutes % 60);

console.log(
    "Kendaraan berangkat pada waktu yang bersamaan yaitu jam 9\nMaka tabrakan mobil terjadi pada jam " +
        carCrashIn
);
