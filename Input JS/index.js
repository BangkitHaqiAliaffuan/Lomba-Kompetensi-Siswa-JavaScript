

/*let username 

username = window.prompt("masukkan nama anda")
console.log(username)*/

document.getElementById("submit").onclick = function(){
    username = document.getElementById("usn-input").value;
    document.getElementById("h1-title").textContent = `Hello ${username}`
}