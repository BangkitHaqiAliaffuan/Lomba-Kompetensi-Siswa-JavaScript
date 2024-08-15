const PI = 3.14;
let jariJari;
let hasil;

document.getElementById("submitluas").onclick = function(){
   jariJari = document.getElementById("inputjari").value;
   jariJari = Number(jariJari);
   hasil = 2 * PI * jariJari;
    document.getElementById("hasil").textContent = `hasil luas lingkaran adalah ${hasil} cm`;
}