let alaskaki = "sandal";
let warna = "merah";
let harga = "mahal";

switch (true) {
    case alaskaki == "sandal" && warna == "merah" && harga == "murah":
        console.log("Saya suka sandal merah yang murah.");
        break;

    case alaskaki == "sandal" && warna == "merah" && harga == "mahal":
        console.log("Saya suka sandal merah yang mahal.");
        break;

    case alaskaki == "sandal" && warna == "biru" && harga == "murah":
        console.log("Saya suka sandal biru yang murah.");
        break;

    case alaskaki == "sandal" && warna == "biru" && harga == "mahal":
        console.log("Saya suka sandal biru yang mahal.");
        break;

    case alaskaki == "sepatu" && warna == "merah" && harga == "murah":
        console.log("Saya suka sepatu merah yang murah.");
        break;

    case alaskaki == "sepatu" && warna == "merah" && harga == "mahal":
        console.log("Saya suka sepatu merah yang mahal.");
        break;

    case alaskaki == "sepatu" && warna == "biru" && harga == "murah":
        console.log("Saya suka sepatu biru yang murah.");
        break;

    case alaskaki == "sepatu" && warna == "biru" && harga == "mahal":
        console.log("Saya suka sepatu biru yang mahal.");
        break;

    default:
        console.log("Tak suka alas kaki merah/biru sekalipun mahal ato murah");
}
