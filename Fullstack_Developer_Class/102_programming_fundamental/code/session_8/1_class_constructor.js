var jomblo = true;
var Andi = { usia: 27, job: "Polisi" };
var Budi = Object.assign({}, { usia: 32, job: "Pilot" });
var Caca = Object.assign({}, Budi, { job: "Akuntan" });
var Dedi = Object.assign({}, { job: "Guru" }, { jomblo });
console.log(Budi);
console.log(Caca);
console.log(Dedi);
