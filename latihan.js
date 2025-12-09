console.log("=== LATIHAN PENJAGA ZOOTOPIA");

let penjaga = [{nama: "Judy Hopps", jarak: 3}, {nama: "Nick Wilde", jarak: 2}];

for (let i = 0; i < 5; i++) {
    console.log("Hari:", (i+1));
    console.log("-", penjaga[0].nama, "lari", penjaga[0].jarak, "km");
    console.log("-", penjaga[1].nama, "lari", penjaga[1].jarak, "km");
    console.log("");

    var totalJarakPenjaga1  = penjaga[0].jarak * (i + 1);
    var totalJarakPenjaga2  = penjaga[1].jarak * (i + 1);

}

console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(penjaga[0].nama + ":", totalJarakPenjaga1 + " km");
console.log(penjaga[1].nama + ":", totalJarakPenjaga2 + " km");