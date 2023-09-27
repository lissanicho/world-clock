function updateTime(){
//london
let londonElement=document.querySelector("#london");
let londonDateElement=londonElement.querySelector(".date");
let londonTimeElement=londonElement.querySelector(".time");
let londonTime=moment().tz("Europe/London");

londonDateElement.innerHTML=londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML=londonTime.format("h:mm:ss [<small>]A[</small>]");

//Tokyo
let tokyoElement=document.querySelector("#tokyo");
let tokyoDateElement=tokyoElement.querySelector(".date");
let tokyoTimeElement=tokyoElement.querySelector(".time");
let tokyoTime=moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML=tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML=tokyoTime.format("h:mm:ss [<small>]A[</small>]");

//Madrid
let madridElement=document.querySelector("#madrid");
let madridDateElement=madridElement.querySelector(".date");
let madridTimeElement=madridElement.querySelector(".time");
let madridTime=moment().tz("Europe/Madrid");

madridDateElement.innerHTML=madridTime.format("MMMM Do YYYY");
madridTimeElement.innerHTML=madridTime.format("h:mm:ss [<small>]A[</small>]");

//New Delhi
let kualaLumpurElement=document.querySelector("#kuala-lumpur");
let kualaLumpurDateElement=kualaLumpurElement.querySelector(".date");
let kualaLumpurTimeElement=kualaLumpurElement.querySelector(".time");
let kualaLumpurTime=moment().tz("Asia/Kuala_Lumpur");

kualaLumpurDateElement.innerHTML=kualaLumpurTime.format("MMMM Do YYYY");
kualaLumpurTimeElement.innerHTML=kualaLumpurTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);