//operasi aritmatika js

/* 
    operasi yang dapat digunakan : +  -  * / ** 
    **(Ekponen)
*/

let barang = 26;

//barang = barang + 4;
//barang = barang - 6;
//barang = barang * 9;
//barang = barang / 2;
barang = barang ** 3;

console.log(barang)

//dengan menambahkan = dibelakang anda tidak perlu menulis variabel yang sama dua kali


let barangJual = 23;

//barangJual += 3;
//barangJual -= 3;
barangJual *= 3;
//barangJual /= 3;
//barangJual **= 3;

console.log(barangJual)

/* urutan operasi aritmatika 
    1. dalam kurung ()
    2. eksponen
    3. pembagian -, perkalian*, modulus %
    4. tambah +, kurang -
*/

let hasil = 2 ** 2 * ( 28 / 2 ) + 4 ;

console.log(hasil)