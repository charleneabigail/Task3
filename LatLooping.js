
//  * Tulis sebuah program untuk menampilkan angka genap dari 1 hingga 20
console.log("=====GENAP=====");

for (let i = 2; i <=20; i++) {
    if (i % 2 === 0) {
    console.log(i)
    }
}
// penjabaran program genap
/*
iterasi 1
let i = 2
2 <= 20 TRUE
2 % 2 = 0 TRUE
        print 2
        2 + 1 = 3
iterasi 2
let i = 3
3 <= 20 TRUE
3 % 2 = 0 FALSE
        tidak di print
        3 + 1 = 4
iterasi 3
let i = 4
4 <= 20 TRUE
2 % 2 = 0 TRUE
        print 4
        4 + 1 = 5
iterasi 4
let i = 5
5 <= 20 TRUE
5 % 2 = 0 FALSE
        tidak di print
.....
iterasi 19
let i = 20
20 <= 20 TRUE
20 % 2 = 0 TRUE
        print 20
        20 + 1 = 21
iterasi 20
let i = 21
21 <= 20 FALSE
tidak masuk ke if dan tidak di print lagi
*/



//  * Tulis sebuah program untuk menampilkan angka genap dari 1 hingga 20
console.log("=====GANJIL=====");

for (let i = 1; i <=20; i++) {
    if (i % 2 !== 0) {
    console.log(i)
    }
}
// penjabaran program ganjil
/*
iterasi 1
let i = 1
1 <= 20 TRUE
1 % 2 != 0 TRUE
        print 1
        1 + 1 = 2
iterasi 2
let i = 2
2 <= 20 TRUE
2 % 2 != 0 FALSE
        tidak di print
        2 + 1 = 3
iterasi 3
let i = 3
3 <= 20 TRUE
3 % 2 != 0 TRUE
        print 3
        3 + 1 = 4
iterasi 4
let i = 4
4 <= 20 TRUE
4 % 2 != 0 FALSE
        tidak di print
.....
iterasi 20
let i = 20
20 <= 20 TRUE
20 % 2 != 0 FALSE
        tidak di print
        20 + 1 = 21
iterasi 21
let i = 21
21 <= 20 FALSE
tidak masuk ke if dan tidak di print lagi
*/

console.log("=====GANJIL GENAP IF ELSE=====");
for (let i = 1; i <=20; i++) {
    if (i % 2 !== 0) {
    console.log(i + " adalah bilangan ganjil")
    } else {
        console.log(i + " adalah bilangan genap");
    }
}
// penjabaran program ganjil genap if else
/*
iterasi 1
let i = 1
1 <= 20 TRUE
1 % 2 != 0 TRUE
        print 1 adalah bilangan ganjil
        increment 1 + 1 = 2
iterasi 2
let i = 2
2 <= 20 TRUE
2 % 2 != 0 FALSE
        tidak print perintah pertama
        masuk ke perintah else
        print 2 adalah bilangan genap
        increment 2 + 1 = 3
iterasi 3
let i = 3
3 <= 20 TRUE
3 % 2 != 0 TRUE
        print 3 adalah bilangan ganjil
        increment 3 + 1 = 4
.....
iterasi 20
let i = 20
20 <= 20 TRUE
20 % 2 != 0 FALSE
        tidak print perintah pertama
        masuk ke perintah else
        print 20 adalah bilangan genap
        increment 20 + 1 = 21
iterasi 21
let i = 21
21 <= 20 FALSE
tidak masuk ke if maupun else dan tidak di print lagi
*/



//  * Tulis sebuah program yang menghitung jumlah dari angka 1 hingga 100.
console.log("=====hitung jumlah 1 sampai 100=====");

let hasil = 0
for (let i = 1; i <= 100; i++) {
    hasil = hasil + i
}
console.log(hasil);

// penjabaran program hitung jumlah angka 1 sampai 100
/*
Buat variable penampung nilai
let hasil = 0
iterasi 1
let i = 1
1 <= 100 TRUE
hasil = hasil + i
        0 + 1 
hasil = 1
increment i + 1 
          1 + 1 = 2

iterasi 2
let i = 2
2 <= 100 TRUE
hasil = hasil + i
        1 + 2 
hasil = 3
increment i + 1 
          2 + 1 = 3
iterasi 3
let i = 3
3 <= 100 TRUE
hasil = hasil + 1
        3 + 1 
hasil = 4
increment i + 1 
          3 + 1 = 4
        
iterasi 4
let i = 4
4 <= 100 TRUE
hasil = hasil + 1
        4 + 1 
hasil = 5
increment i + 1 
          4 + 1 = 5
...dst
*/


/**
 * Pola Segitiga Naik
 * Tampilkan pola segitiga asteriks sebagai berikut untuk n = 5. Contoh:

*
**
***
****
*****

 */

console.log("=====segitiga naik=====");

let star = "";
for (let i = 1; i<=5; i++) {
    for (let j = 0; j<i; j++) {
        star += "*"
    }

    star += "\n"
}
console.log(star);
// penjabaran looping segitiga naik
/*
Buat variable penampung
let star = ""

iterasi 1i
let i = 1
1 <= 5 = TRUE
    masuk ke bawah
    iterasi 1j
    let j = 0
    j < i
    0 < i
    0 < 1 TRUE
    maka "" + "*"
    *
    iterasi 2j
    let j = 1
    j < i
    1 < 1 FALSE
    maka tidak lanjut iterasi j
    masuk ke bawah untuk jalankan \n
    star = "*" + \n
    increment i ++ 
            1 + 1 = 2

iterasi 2i
let i = 2 
2 <= 5 TRUE
    masuk ke bawah
    iterasi 1j
    let j = 0
    j < i
    0 < 2 TRUE
    maka "" + "*"
    *
    increment j + 1
              0 + 1 = 1
    iterasi 2j
    let j = 1
    j < i
    1 < 2 TRUE
    maka "*" + "*"
    **
    increment j + 1
              1 + 1 = 2
    iterasi 3j
    let j = 2
    j < i
    2 < 2 FALSE
    maka tidak lanjut iterasi j, 
    masuk ke bawah untuk jalankan \n
    star = "**" + \n
    kembali ke atas (iterasi i)

iterasi 3i
let i = 3
3 <= 5 TRUE
    masuk ke bawah
    iterasi 1j
    let j = 0
    j < i
    0 < 3 TRUE
    maka "" + "*"
    *
    increment j + 1
              0 + 1 = 1
    iterasi 2j
    let j = 1
    j < i
    1 < 3 TRUE
    maka "*" + "*"
    **
    increment j + 1
              1 + 1 = 2
    iterasi 3j
    let j = 2
    j < i
    2 < 3 TRUE
    maka "**" +"*"
    ***
    increment j + 1
              2 + 1 = 3
    iterasi 4j
    let j = 3
    j < i
    3 < 3 FALSE
    maka tidak lanjut iterasi j, 
    masuk ke bawah untuk jalankan \n
    star = "***" + \n
    kembali ke atas (iterasi i)
...dst
*/



/**
 * Pola Segitiga Terbalik
 * Tampilkan pola segitiga asteriks terbalik sebagai berikut untuk n = 5. Contoh:
 
*****
****
***
**
*

*/
console.log("=====segitiga terbalik=====");

let star1 = "";
for (let i = 5; i>=0; i--) {
    
    for (let j = 0; j<i; j++) {
        star1 += "*";
    }
    star1 += "\n";
    }
console.log(star1);


/**
 * Pola Berlian
 * Tampilkan pola segitiga asteriks berlian sebagai berikut untuk n = 5. Contoh:
 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

 */

   let size = 5; //size of the diamond
   let str = "";
   
   for(let i = 1; i <= size; i++){
       for(let j = size; j > i; j--){
           str += " ";
       }
       for(let k = 1; k <= (2*i-1); k++){
           str += "*";
       }
       str += "\n";
   }
   
   for(let i = size - 1; i >= 1; i--){
       for(let j = size; j > i; j--){
           str += " ";
       }
       for(let k = 1; k <= (2*i-1); k++){
           str += "*";
       }
       str += "\n";
   }
   
   console.log(str);

// penjabaran looping segitiga diamond
/* 
iterasi 1i
let i = 1
1 <= size
1 <= 5 TRUE
    masuk iterasi 1j
    j = size
    j = 5
    j > i
    5 > 1 TRUE
        maka turun
        str = str + " "
        str = "" + " "  // kosong + spasi 1
        str = " "       // str = spasi 1
        decrement j - 1 = 5 - 1 = 4
    lanjut iterasi 2j
    j = 4
    j > i
    4 > 1 TRUE
        maka turun
        str = str + " "
        str = " " + " "  // spasi 1 + spasi 1
        str = "  "       // spasi 2
        decrement j - 1 = 4 - 1 = 3
   lanjut iterasi 3j
    j = 3
    j > i
    3 > 1 TRUE
        maka turun
        str = str + " "
        str = "  " + " "  // spasi 2 + spasi 1
        str = "   "       // spasi 3
        decrement j - 1 = 3 - 1 = 2
    lanjut iterasi 4j
    j = 2
    j > i
    2 > 1 TRUE
        maka turun
        str = str + " "
        str = "   " + " "  // spasi 3 + spasi 1
        str = "    "       // spasi 4
        decrement j - 1 = 2 - 1 = 1
   lanjut iterasi 5j
    j = 2
    j > i
    1 > 1 FALSE
    karena false maka lanjut ke for k (karena for k masih dalam body for i)
    iterasi 1k
    k = 1
    k <= (2*i-1)
    1 <= (2*1-1)
    1 <= 1 TRUE
        maka turun
        str += "*"
        str = str + "*"
        str = "    " + "*" // spasi 4 + *
        str = "    *"
        increment = k + 1 = 1 + 1 = 2
    iterasi 2k
    k = 2
    k <= (2*i-1)
    2 <= (2*1-1)
    2 <= 1 FALSE
    maka keluar dari for k dan naik ke for i
iterasi 2i
let i = 2
2 <= size
2 <= 5 TRUE
    masuk iterasi 1j
    j = size
    j = 5
    j > i
    5 > 2 TRUE
        maka turun
        str = str + " "
        str = "" + " "  // kosong + spasi 1
        str = " "       // str = spasi 1
        decrement j - 1 = 5 - 1 = 4
    lanjut iterasi 2j
    j = 4
    j > i
    4 > 1 TRUE
        maka turun
        str = str + " "
        str = " " + " "  // spasi 1 + spasi 1
        str = "  "       // spasi 2
        decrement j - 1 = 4 - 1 = 3
   lanjut iterasi 3j
    j = 3
    j > i
    3 > 1 TRUE
        maka turun
        str = str + " "
        str = "  " + " "  // spasi 2 + spasi 1
        str = "   "       // spasi 3
        decrement j - 1 = 3 - 1 = 2
    lanjut iterasi 4j
    j = 2
    j > i
    2 > 1 TRUE
        maka turun
        str = str + " "
        str = "   " + " "  // spasi 3 + spasi 1
        str = "    "       // spasi 4
        decrement j - 1 = 2 - 1 = 1
   lanjut iterasi 5j
    j = 2
    j > i
    1 > 1 FALSE
    karena false maka turun ke /n karena for k sudah dijalankan
    lalu body di dalam for i sudah habis
    sehingga lanjut ke for i yang ke 2
    dst ...




*/



/**
 * Pola Segitiga Bilangan
 * Tampilkan pola segitiga dengan angka dengan asteriks sebagai pemisah:

1
1*2
1*2*3
1*2*3*4
1*2*3*4*5

 */
console.log("=====pola segitiga bilangan=====");

var n = 5;
var row = "";
for (var i = 1; i<= n; i++) {
    if (row !== "") {
        row +="*"; // tambah asterisk sebagai pemisah jika row tidak kosong
    }
row += i;  // tambah nomor ke dalam row
console.log(row);
}

