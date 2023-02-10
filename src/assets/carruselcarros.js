var header = document.getElementById("header");
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var m4 = document.getElementById("m4");
var m5 = document.getElementById("m5");
var model = document.getElementById("model");
var mph = document.getElementById("mph");
var maxrange = document.getElementById("maxrange");
var topspeed = document.getElementById("topspeed");


m1.onclick=function()
{
    header.style.backgroundImage="url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/ultimae_coupe_Compositing_4terzi_00.jpg)";
    model.innerHTML="Model 1";
    mph.innerHTML="1.5s";
    maxrange.innerHTML="200mph";
    topspeed.innerHTML="300mi";
}
m2.onclick=function()
{
    header.style.backgroundImage="url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/images-s/2021/07_07/gate_family_s_01_m.jpg)";
    model.innerHTML="Model 2";
    mph.innerHTML="1.6s";
    maxrange.innerHTML="300mph";
    topspeed.innerHTML="350mi";
}
m3.onclick=function()
{
    header.style.backgroundImage="url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/aventador/Ultimae/aven_ultimae_og.jpg)";
    model.innerHTML="Model 3";
    mph.innerHTML="1.1s";
    maxrange.innerHTML="300mph";
    topspeed.innerHTML="400mi";
}
m4.onclick=function()
{
    header.style.backgroundImage="url(https://image.stern.de/31757692/t/ql/v3/w1440/r0/-/05--artikel26212bild01jpg---b057abf33b59ccc2.jpg)";
    model.innerHTML="Model 4";
    mph.innerHTML="2.0s";
    maxrange.innerHTML="250mph";
    topspeed.innerHTML="270mi";
}
m5.onclick=function()
{
    header.style.backgroundImage="url(https://www.hdcarwallpapers.com/walls/lamborghini_aventador_lp_780_4_ultimae_2022_4k_4-HD.jpg)";
    model.innerHTML="Model 5";
    mph.innerHTML="1.8s";
    maxrange.innerHTML="400mph";
    topspeed.innerHTML="650mi";
}
