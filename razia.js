function kenaRazia(date, data) {
  const ganjilGenapRute = [
    "Gajah Mada",
    "Hayam Wuruk",
    "Sisingamangaraja",
    "Panglima Polim",
    "Fatmawati",
    "Tomang Raya",
  ];
  let pelanggaran = [];

  for (let i = 0; i < data.length; i++) {
    let kendaraan = data[i];
    if (kendaraan.type !== "Mobil") continue;

    let platNumber = kendaraan.plat.split(" ")[1];
    let lastDigit = parseInt(platNumber[platNumber.length - 1]);
    let isGenap = lastDigit % 2 === 0;
    let isTanggalGenap = date % 2 === 0;
    let countTilang = 0;

    for (let j = 0; j < kendaraan.rute.length; j++) {
      if (ganjilGenapRute.indexOf(kendaraan.rute[j]) !== -1) {
        if ((isGenap && !isTanggalGenap) || (!isGenap && isTanggalGenap)) {
          countTilang++;
        }
      }
    }

    if (countTilang > 0) {
      pelanggaran.push({ name: kendaraan.name, tilang: countTilang });
    }
  }

  return pelanggaran;
}

console.log(
  kenaRazia(27, [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"],
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
      ],
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"],
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: [
        "Fatmawati",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
        "Gajah Mada",
      ],
    },
  ])
);
// Output yang diharapkan: [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]
