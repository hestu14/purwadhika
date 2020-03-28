let weight = 67; // in kilogram
let height = 1.78; // in meters

let imt = weight / Math.pow(height, 2);

let description = "BERAT BADAN ANDA";

if (imt < 18.5) {
    description += " KURANG";
}

if (imt >= 18.5 && imt <= 24.9) {
    description += " IDEAL";
}

if (imt >= 25 && imt <= 29.9) {
    description += " BERLEBIH";
}

if (imt >= 30 && imt <= 39.9) {
    description += " SANGAT BERLEBIH";
}

if (imt >= 40) {
    description += " OBESITAS";
}

console.log(
    `Berat ${weight} kg & tinggi ${height} m`,
    `\nIMT = ${imt}, ${description}!`
);
