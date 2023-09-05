/*Buatlah fungsi yang dapat menentukan kategori usia seseorang berdasarkan rentang usia sebagai berikut:
1. 0-12 tahun: "Anak-anak"
2. 13-19 tahun: "Remaja"
3. 20-35 tahun: "Dewasa"
4. 36 tahun ke atas: "Lanjut Usia"

Kalian diminta membuat fungsi kategoriUsia(umur) yang menerima parameter:
1. umur (number): Usia seseorang dalam tahun.

Fungsi ini harus mengembalikan kategori usia berdasarkan rentang usia yang diberikan.
*/

// 1.
function kategoriUsia (umur) {
    if (typeof umur !== "number"){
        return "bukan umur"
    }
    
    if (umur <= 12) {
        return "Anak-anak"
    } else if (umur >= 13 && umur <= 19) {
        return "Remaja"
    } else if (umur >= 20 && umur <= 35) {
        return "Dewasa"
     } else {
        return "Lanjut Usia"
     }
}

console.log(("=========SOAL NO 1========="))
console.log(kategoriUsia(8))
console.log(kategoriUsia(15))
console.log(kategoriUsia(25))
console.log(kategoriUsia(40))
console.log(kategoriUsia("abc"))


/* Soal Latihan: Penentuan Biaya Parkir

Sebuah mal memiliki aturan biaya parkir sebagai berikut:

1. Jika parkir kurang dari atau sama dengan 1 jam, maka biaya parkirnya adalah Rp10.000.
2. Untuk setiap jam berikutnya (lebih dari 1 jam), biaya tambahan adalah Rp5.000/jam.
3. Jika parkir lebih dari 5 jam, akan diberikan diskon Rp10.000 dari total biaya.
4. Parkir di hari Minggu dikenakan biaya tambahan Rp5.000.
5. Jika total biaya parkir lebSih dari Rp30.000 dan parkir dilakukan pada hari libur nasional, maka akan diberikan diskon tambahan sebesar Rp7.000.

Buatlah fungsi hitungBiayaParkir(lamaParkir, hari, liburNasional) yang menerima parameter:
1. lamaParkir (number): Durasi parkir dalam jam.
2. hari (string): Nama hari (Senin, Selasa, ..., Minggu).
3. liburNasional (boolean): Menandakan apakah hari itu merupakan libur nasional atau tidak (true jika ya, false jika tidak).

Fungsi ini harus mengembalikan biaya parkir berdasarkan kondisi yang diberikan.
*/

// 2.
function hitungBiayaParkir (lamaParkir, hari, liburNasional) {
    let cost = 0

    if (lamaParkir > 0) {
        cost = cost + 10000;

        if (lamaParkir > 1) {
            cost = cost + (lamaParkir - 1 ) * 5000
        }
    }

    if (lamaParkir > 5) {
        cost = cost - 10000;
    }

    if (hari.toLowerCase() === 'minggu') {
        cost = cost + 5000;
    }

    if (cost > 30000 && liburNasional) {
        cost = cost - 7000;
    }

    return cost;
}

console.log("========SOAL NO 2========")
console.log(hitungBiayaParkir(2, 'Sabtu', false));
// Output: Biaya Parkir: Rp15000.
console.log(hitungBiayaParkir(6, 'Minggu', true));
// Output: Biaya Parkir: Rp30000



/* Soal Latihan: Penjadwalan Acara Festival

Sebuah kota sedang mempersiapkan festival tahunan mereka. 
Mereka ingin membuat sistem otomatis untuk menentukan acara yang akan dijalankan berdasarkan berbagai kondisi. 
Anda diminta untuk membantu membangun fungsi penjadwalan ini.
 
Kriteria Penjadwalan:
1. Jika hari itu hujan dan anginnya kencang (angin > 20 km/jam), maka semua acara di luar ruangan akan dibatalkan.
2. Jika hujan tapi anginnya tidak terlalu kencang, acara di luar ruangan akan dipindahkan ke dalam ruangan.
3. Jika suhu di bawah 5°C, acara konser malam harus diganti dengan acara indoor.
4. Jika hari cerah dan suhu di atas 25°C, tambahkan acara "Pesta Es Krim" di siang hari.
5. Jika hari Minggu dan cerah, tambahkan acara "Maraton Senja".
6. Setiap hari, tanpa memandang kondisi cuaca, akan selalu ada "Pameran Seni" di dalam ruangan.

Tugas Anda adalah untuk membuat fungsi jadwalFestival(hari, cuaca, suhu, angin) yang menerima parameter:
1. hari (string): Nama hari (Senin, Selasa, ..., Minggu).
2. cuaca (string): 'Hujan' atau 'Cerah'.
3. suhu (number): Suhu hari itu dalam °C.
4. angin (number): Kecepatan angin dalam km/jam.

Fungsi ini harus mengembalikan sebuah string yang berisi daftar acara yang akan diadakan berdasarkan kondisi yang diberikan.
*/

// 3.
function jadwalFestival(hari, cuaca, suhu, angin) {
    const hariLower = hari.toLowerCase();
    const cuacaLower = cuaca.toLowerCase();

    let daftarAcara = "Pameran Seni";
    if (cuacaLower === 'hujan') {
        if (angin < 20) {
            daftarAcara += ", Acara Dalam Ruangan"
        }
    } else {
        daftarAcara += ", Acara Luar Ruangan"
    }

    if (cuacaLower !== "hujan" && suhu > 5) {
        daftarAcara += ", Konser Malam"
    }

    if (cuacaLower === "cerah" && suhu > 25) {
        daftarAcara += ", Pesta Es Krim"
    }

    if (hariLower === "minggu" && cuacaLower === "cerah") {
        daftarAcara += ", Maraton Senja"
    }

    return daftarAcara
}

console.log("========SOAL NO 3========");
console.log(jadwalFestival('Sabtu', 'Hujan', 23, 30));
// Output: Daftar Acara: Pameran Seni.
console.log(jadwalFestival('Sabtu', 'Hujan', 23, 10));
// Output: Daftar Acara: Pameran Seni, Acara Dalam Ruangan.
console.log(jadwalFestival('Minggu', 'Cerah', 27, 8));
// Output: Daftar Acara: Pameran Seni, Pesta Es Krim, Maraton Senja.

