let maksimalBaris = 10;
let centerColumn = maksimalBaris * 2 - 1;
let startDrawAtColumn = 1;

for (baris = 1; baris <= maksimalBaris; baris++) {
    let draw = "";

    for (kolom = 1; kolom <= centerColumn; kolom++) {
        if (kolom >= startDrawAtColumn && kolom <= centerColumn) {
            draw += " * ";
        } else {
            draw += "   ";
        }
    }

    startDrawAtColumn++;
    centerColumn--;
    console.log(`${draw}\n`);
}
