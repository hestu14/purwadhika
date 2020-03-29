let maksimalBaris = 20;
let maksimalBintangPerBaris = 5;
let minimalBintangPerBaris = 1;

let modeIncrement = false;
let jumlahBintang = 5;

for (baris = 1; baris <= maksimalBaris; baris++) {
    var draw = "";

    let i = 1;

    // Gunakan do while atau while loop
    // Jika batas akhir perulangan belum diketahui atau dinamis
    // do {
    //     draw += "*  ";
    //     i++;
    // } while (i <= jumlahBintang);

    // Gunakan for loop
    // Jika batas akhir perulangan diketahui
    for (let i = 1; i <= jumlahBintang; i++) {
        draw += "* ";
    }

    // Apakah harus ditambahkan?
    if (modeIncrement) {
        jumlahBintang++;
    } else {
        // not increment = decrement
        jumlahBintang--;
    }

    if (jumlahBintang === maksimalBintangPerBaris) {
        modeIncrement = false;
    }

    if (jumlahBintang === minimalBintangPerBaris) {
        modeIncrement = true;
    }

    console.log(`${draw}\n`);
}
