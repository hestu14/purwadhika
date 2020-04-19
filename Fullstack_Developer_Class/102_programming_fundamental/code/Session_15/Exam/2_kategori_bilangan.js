class Bilangan {
    constructor() {}

    cekBilanganBulat(angka) {
        return angka.toString().indexOf(".") === -1;
    }

    cekBilanganCacah(angka) {
        return this.cekBilanganBulat(angka) && angka >= 0;
    }

    cekBilanganNegatif(angka) {
        return this.cekBilanganBulat(angka) && angka < 0;
    }

    cekBilanganNol(angka) {
        return angka == 0;
    }

    cekBilanganAsli(angka) {
        return this.cekBilanganCacah(angka) && angka > 0;
    }

    cekBilanganGanjil(angka) {
        return this.cekBilanganAsli(angka) && angka % 2 !== 0;
    }

    cekBilanganGenap(angka) {
        return (this.cekBilanganAsli(angka) && angka % 2 == 0) || angka == 0;
    }

    cekBilanganPrima(angka) {
        return (
            (angka > 1 &&
                this.cekBilanganGanjil(angka) &&
                this.cekBilanganBulat(Math.sqrt(angka)) === false) ||
            angka == 2
        );
    }

    cekBilanganKomposit(angka) {
        return (
            angka > 1 &&
            this.cekBilanganAsli(angka) &&
            this.cekBilanganPrima(angka) === false
        );
    }

    cek(angka) {
        let hasil = [];

        if (this.cekBilanganBulat(angka)) {
            hasil.push("bulat");
        }

        if (this.cekBilanganNegatif(angka)) {
            hasil.push("negatif");
        }

        if (this.cekBilanganCacah(angka)) {
            hasil.push("cacah");
        }

        if (this.cekBilanganNol(angka)) {
            hasil.push("nol");
        }

        if (this.cekBilanganAsli(angka)) {
            hasil.push("asli");
        }

        if (this.cekBilanganGanjil(angka)) {
            hasil.push("ganjil");
        }

        if (this.cekBilanganGenap(angka)) {
            hasil.push("genap");
        }

        if (this.cekBilanganPrima(angka)) {
            hasil.push("prima");
        }

        if (this.cekBilanganKomposit(angka)) {
            hasil.push("komposit");
        }
        return hasil;
    }
}

let bilangan = new Bilangan();

let kumpulanAngka = [13, 0, 25, 73, -34, 1.56];

for (let i = 0; i < kumpulanAngka.length; i++) {
    angka = kumpulanAngka[i];
    console.log(
        `Angka (${angka}) termasuk dalam bilangan: `,
        bilangan.cek(angka)
    );
}
