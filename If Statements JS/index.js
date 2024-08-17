// if statement = if is a condition is true do //this, if not do something else


const button = document.getElementById("submitbtn");
const hasil = document.getElementById("hasil");
let sigpoint;

button.onclick = function(){
    sigpoint = document.getElementById("inputsig").value;
    sigpoint = Number(sigpoint)
    if(sigpoint > 999){
        hasil.textContent = "Pembohong Tidak Ada Sigma Yang Memiliki Point Diatas 999"        
    }
    else if(sigpoint == 999){
        hasil.textContent = "SELAMAT DATANG RAJA SIGMA!!"
    }
    else if(sigpoint >= 200){
        hasil.textContent = "Kamu Memang Sigma Sejati"
    }
    else if(sigpoint < 0){
        hasil.textContent = "Dasar Sampah, Kamu Bahkan Tidak Cocok Disebut Sebagai Seorang Sigma"
    }
    else if(sigpoint == 0){
        hasil.textContent = "Kamu Masih Bisa Meningkatkan Kesigmaanmu Semangat"
    }
    
    else{
        hasil.textContent = "Kamu Belum Cukup Sigma Untuk ini"
    }
}




/*if(sigpoint >= 200){
    console.log("Selamat Datang Manusia Sigma")
    if(isMewing){
        console.log("GG Kamu Sudah Mewing")
    }
    else{
        console.log("MewingLah Terlebih Dahulu")
    }
}
else{
    console.log("Kamu Belum Cukup Sigma Untuk Memasuki Website Ini")
}
*/


/*if(sigpoint > 999){
    console.log("Pembohong Tidak Ada Raja SIgma Yang Memiliki Sigma Points Diatas 999");
    if(sigpoint > 900000){

    }
}
else if(sigpoint == 0){
    console.log("Semangat, Kesempatanmu Menjadi Raja Sigma Belum Berakhir")
}
else if(sigpoint < 0){
    console.log("Dasar Sampah, Kamu Bukanlah Sigma Lagi Kamu Merupakan Beta Male ")
}
else if(sigpoint >= 100){
    console.log("Selamat Datang Raja Sigma")
}
else{
    console.log("Kamu Belum Cukup Sigma Untuk Memasuki Website Ini")
}*/

