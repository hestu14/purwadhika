let totalHari = 720;
let perTahun = 360; // hari
let perBulan = 30; //hari

let jumlahTahun = Math.floor(totalHari / perTahun);

let sisaHari = totalHari % perTahun;

let jumlahBulan = Math.floor(sisaHari / perBulan);

sisaHari = sisaHari % perBulan;

let jumlahMinggu = Math.floor(sisaHari / 7);

let jumlahHari = sisaHari % 7;

console.log(
    jumlahTahun + " tahun",
    jumlahBulan + " bulan",
    jumlahMinggu + " minggu",
    jumlahHari + " hari"
);
