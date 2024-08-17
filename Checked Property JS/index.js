const button = document.getElementById("submitBtn");
const cbx = document.getElementById("cbx");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const result = document.getElementById("result");
const payResult = document.getElementById("paymentResult");

button.onclick = function(){
    if(cbx.checked){
        if(radio1.checked){
            result.textContent = `Terimakasih Telah Melakukan pembelian`
            payResult.textContent = `Silahkan Scan Barcode Berikut`
        }
        else if(radio2.checked){
            result.textContent = `terimakasih karena telah melakukan pembelian`
            payResult.textContent = `Silahkan Masukkan Username dan password paypal anda`
        }
        else if(radio3.checked){
            result.textContent = `terimakasih karena telah melakukan pembelian`
            payResult.textContent = `Silahkan Melampirkan Foto Dengan ktp`
        }
        else{
            result.textContent = `pilih pembayaran anda terlebih dahulu  `
        }
}


    else{
        if(radio1.checked){
            result.textContent = `tentukan apakah anda membeli atau tidak`
        }
        else if(radio2.checked){
            result.textContent = `tentukan apakah anda membeli atau tidak`
        }
        else if(radio3.checked){
            result.textContent = `tentukan apakah anda membeli atau tidak`
        }
    }
}