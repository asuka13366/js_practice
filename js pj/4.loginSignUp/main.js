var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

var loginbtn = document.getElementById("loginbtn");
var registerbtn = document.getElementById("registerbtn");

registerbtn.onclick = function(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
loginbtn.onclick = function(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}