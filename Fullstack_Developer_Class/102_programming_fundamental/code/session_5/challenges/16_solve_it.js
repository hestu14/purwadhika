let draw = "";
for (var baris = 1; baris <= 5; baris++) {
    for (var bintang = 1; bintang <= baris; bintang++) {
        draw += "* ";
    }
    draw += "\n";
}

console.log(draw);
