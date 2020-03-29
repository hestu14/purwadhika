let maxLine = 20;
let starSize = 10; // star column
let endStarColumn = Math.floor(maxLine / starSize);

// get the center of star column
let startStarColumn = starSize + 1;

let flipTriangle = false;

for (let line = 1; line <= maxLine; line++) {
    let star = "";
    for (let column = 1; column <= endStarColumn; column++) {
        if (column >= startStarColumn) {
            star += " * ";
        } else {
            star += "   ";
        }
    }

    if (flipTriangle === false) {
        startStarColumn--;
        endStarColumn++;
    } else {
        startStarColumn++;
        endStarColumn--;
    }

    if (line % starSize === 0 && flipTriangle === false) {
        flipTriangle = true;
    } else if (line % starSize === 0 && flipTriangle === true) {
        flipTriangle = false;
    }

    if (star.trim().length !== 0) {
        console.log(`${star}\n`);
    }
}
