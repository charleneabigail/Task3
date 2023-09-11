/**
 * Hapus item terkhir
 * 
 * let fruits = ['apple', 'banana', 'cherry']
 */
console.log("=====HAPUS ITEM TERAKHIR=====");

let fruits = ['apple', 'banana', 'cherry']
fruits.pop()
console.log(fruits);
// Output: ['apple', 'banana']


/**
 * Cari panjang array
 * 
 * Diberikan sebuah array ['a', 'b', 'c', 'd', 'e']. Tentukan panjang dari array tersebut.
 */
console.log("=====CARI PANJANG ARRAY=====");

let bulkAlphabet = ['a', 'b', 'c', 'd', 'e']
console.log(bulkAlphabet.length);
// Output: 5


/**
 * Cari nilai tertinggi dan terendah
 * 
 * Terdapat array [21, 19, 10, 89, 3, 20, 33, 34], tentukan nilai tertinggi dan nilai terendah. 
 * Setelah itu urutkan array tersebut tanpa menggunakan built in function
 */
console.log("=====CARI NILAI TERTINGGI=====");
let angkaUnik = [21, 19, 10, 89, 3, 20, 33, 34]
let angkaUnikMax = Math.max(...angkaUnik)
console.log(angkaUnikMax)

// atau
let angkaMax = angkaUnik[0]
for (let i = 0; i < angkaUnik.length; i++) {
  if (angkaMax <= angkaUnik[i]) {
    (angkaMax = angkaUnik[i])
  }
}
console.log(angkaMax);



console.log("=====CARI NILAI TERENDAH=====");
let angkaUnik2 = [21, 19, 10, 89, 3, 20, 33, 34]
let angkaUnikMin = Math.min(...angkaUnik2)
console.log(angkaUnikMin)

// atau
let angkaMin = angkaUnik[0]
for (let i = 0; i < angkaUnik.length; i++) {
  if ( angkaMin >= angkaUnik[i]) {
    angkaMin = angkaUnik[i]
  }
}
console.log(angkaMin);


// atau
let angkaUnik4 = [21, 19, 10, 89, 3, 20, 33, 34]
let tertinggi = 0
let terendah = 999
for (let i of angkaUnik4) {
  let perAngka = i
  console.log(perAngka)
if (tertinggi < perAngka) {
    tertinggi = perAngka
}
if (terendah > perAngka) {
    terendah = perAngka
}
}
console.log(`tertinggi, terendah`)



console.log("=====URUTKAN ARRAY=====");
let angkaUnik3 = [21, 19, 10, 89, 3, 20, 33, 34]
// let susun = []
// for (let i = 0; i = angkaUnikMin; i++) {
//   susun.push(angkaUnik3[i])
// } 
// for (let i = angkaUnikMin; i > angkaUnikMin; i++) {
//   susun.push(angkaUnik3[i])
// }
// console.log(susun);

for (let i = 1; i < angkaUnik3.length; i++) {
  let j = i - 1;
  while (j >= 0 && angkaUnik3[j] > angkaUnik3[i]) {
      angkaUnik3[j + 1] = angkaUnik3[j];
      j = j - 1;
  }
  angkaUnik3[j + 1] = angkaUnik3[i];
}

console.log('Sorted: ', angkaUnik3)



/**
 * Gabungkan Dua Array, berikut dengan ketentuan:
 * 1. Menggunakan built in function
 * 2. Tidak menggunakan built in function
 * 
 * [1, 2, 3] dan [4, 5, 6]
 */
console.log("=====GABUNGKAN 2 ARRAY=====");
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let result1 = arr1.concat(arr2)
console.log(result1);

// atau
let gabung = []
for (let i = 0; i < arr1.length; i++) {
    gabung.push(arr1[i]);
}
for (let i = 0; i < arr2.length; i++) {
  gabung.push(arr2[i]);
}
console.log(gabung);

// atau
let result2 = [...arr1, ...arr2]
console.log(result2);



/**
 * Filter huruf ganjil
 * 
 * Diberikan sebuah array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. 
 * Buatlah sebuah array baru yang hanya berisi angka ganjil dari array tersebut.
 * 
 * Ketentuan tanpa menggunakan built in function
 */
console.log("=====FILTER HURUF GANJIL=====");
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let angkaGanjil = []
for (let el of arr3) {
  if (el % 2 !== 0) {
    angkaGanjil.push(el)
  }
}
console.log(angkaGanjil); // [1, 3, 5, 7, 9]




// /**
//  * Susun ulang array
//  * 
//  * Diberikan array [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]. 
//  * Urutkan array ini dari yang terkecil ke terbesar, kemudian balikkan urutannya. 
//  * Setelah itu, hapus angka yang sama sehingga setiap angka hanya muncul sekali.
//  * 
//  * Bisa menggunakan built in function. Kisi2 sebagai berikut:
//  * 1. Urutkan array terlebih dahulu
//  * 2. Balik urutan array tersebut
//  * 3. Hapus angka yang duplikat
//  */
console.log("=====SUSUN, REVERSE, DELETE DUPLICATE=====");

let susunArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
susunArray.sort()
console.log(susunArray);

susunArray.sort().reverse()
console.log(susunArray);


// atau
let angkaKumupulan =[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
angkaKumupulan.sort (function (a,b) {
  return a-b;
})
console.log(angkaKumupulan);

angkaKumupulan.sort(function(a,b) {
  return b-a
})
console.log(angkaKumupulan);

// atau
let uniqueArray = []
for (let i = 0; i < angkaKumupulan.length; i++) {
  // console.log(uniqueArray.indexOf(angkaKumupulan[i]));  //membongkar bungkus array
  if (uniqueArray.indexOf(angkaKumupulan[i]) === -1) {
    uniqueArray.push(angkaKumupulan[i])
  }
}
console.log(uniqueArray);

const hasil = [...new Set (angkaKumupulan)];
console.log(hasil);
// Output : [9, 6, 5, 4, 3, 2, 1]


// /**
//  * Menggabungkan Array dengan Spesifik
//  * Memiliki dua array, arr1 = [1, 2, 3] dan arr2 = ['a', 'b', 'c']. 
//  * Gabungkan kedua array tersebut sehingga mendapatkan hasil ['a', 1, 'b', 2, 'c', 3].
//  */

// let kumpulanAngka = [1, 2, 3]
// let kumpulanHuruf = ["a", "b", "c"]
console.log("=====GABUNG HURUF ANGKA HURUF ANGKA=====")


let kumpulanAngka = [1, 2, 3]
let kumpulanHuruf = ["a", "b", "c"]
let vMax = Math.max(kumpulanAngka.length, kumpulanHuruf.length);
let result3 = []
for (let i = 0; i < vMax; i++) {
result3.push(kumpulanHuruf[i]);
result3.push(kumpulanAngka[i]);
}
console.log(result3);


// atau
let kumpulanAngka1 = [1, 2, 3]
let kumpulanHuruf1 = ["a", "b", "c", "d"]

let vMax1 = Math.max(kumpulanAngka1.length, kumpulanHuruf1.length);
let result4 = []
for (let i = 0; i < vMax1; i++) {
  if ( i < kumpulanHuruf1.length) {
    result4.push (kumpulanHuruf1[i]);
  }
  if ( i < kumpulanAngka1.length) {
    result4.push (kumpulanAngka1[i]);
  }

}
console.log(result4);
