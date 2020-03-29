let alaskaki = "sepatu";
let warna = "merah";

// switch (false)

// equivalent
// if (false == (expression))
// if (false == (alaskaki == "sepatu" && warna == "merah"))

// switch (true)

// equivalent
// if (true == (expression))
// if (true == (alaskaki == "sepatu" && warna == "merah"))

switch (true) {
    case alaskaki == "sepatu" && warna == "merah":
        console.log("Saya suka sepatu merah.");
        break; // don't forget to break, if not, the case will flow to the next case
    case alaskaki == "sepatu" && warna == "biru":
        console.log("Saya suka sepatu biru.");
        break;
    case alaskaki == "sandal" && warna == "merah":
        console.log("Saya suka sandal merah.");
        break;
    case alaskaki == "sandal" && warna == "biru":
        console.log("Saya suka sandal biru.");
        break;
    default:
        console.log("Tak suka alas kaki merah/biru.");
}

// let date = new Date();

// switch (date.getDay()) {
//     case 0:
//     case 1:
//     case 2:
//         console.log("Hari senin, selasa, rabu");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Hari kamis, jumat, sabtu");
//         break;
// }
