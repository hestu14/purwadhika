let maksimalBaris = 10;

// supaya ganjil dan memiliki kolom tengah
let centerColumn = maksimalBaris * 2 - 1;

let startDrawAtColumn = maksimalBaris;

for (baris = 1; baris <= maksimalBaris; baris++) {
    let draw = "";
    let endDrawAtColumn = centerColumn - startDrawAtColumn + 1;
    console.log(`${endDrawAtColumn} = ${centerColumn} - ${startDrawAtColumn} + 1`);
    console.log(endDrawAtColumn);

    for (kolom = 1; kolom <= centerColumn; kolom++) {
        if (kolom >= startDrawAtColumn && kolom <= endDrawAtColumn) {
            console.log(
                `${kolom} >= ${startDrawAtColumn} && ${kolom} <= ${endDrawAtColumn}`
            );

            draw += " * ";
        } else {
            draw += "   ";
        }
    }

    startDrawAtColumn--;
    console.log(`${draw}\n`);
}
