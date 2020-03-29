let buah = ["Jeruk", "Nanas", "Apel"];
buah.splice(2, 0, "Lemon", "Kiwi");
console.log(buah);
buah.splice(0, 1);
console.log(buah);
delete buah[0];
console.log(buah);
