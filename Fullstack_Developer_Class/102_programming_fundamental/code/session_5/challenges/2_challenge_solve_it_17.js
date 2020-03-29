let draw = "";
let jumlahBaris = 5;

for (var baris = 1; baris <= jumlahBaris; baris++) {

    for (var bintang = jumlahBaris - baris; bintang >= 0; bintang--) {
        draw += "* ";
    }
    draw += "\n";
    
}

console.log(draw);
