function updateTime(){
//london

let londonElement=document.querySelector("#london");
if (londonElement){
let londonDateElement=londonElement.querySelector(".date");
let londonTimeElement=londonElement.querySelector(".time");
let londonTime=moment().tz("Europe/London");

londonDateElement.innerHTML=londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML=londonTime.format("h:mm:ss [<small>]A[</small>]");}

//Tokyo

let tokyoElement=document.querySelector("#tokyo");
if (tokyoElement){
let tokyoDateElement=tokyoElement.querySelector(".date");
let tokyoTimeElement=tokyoElement.querySelector(".time");
let tokyoTime=moment().tz("Asia/Tokyo");

tokyoDateElement.innerHTML=tokyoTime.format("MMMM Do YYYY");
tokyoTimeElement.innerHTML=tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}

//Madrid

let madridElement=document.querySelector("#madrid");
if (madridElement){
let madridDateElement=madridElement.querySelector(".date");
let madridTimeElement=madridElement.querySelector(".time");
let madridTime=moment().tz("Europe/Madrid");

madridDateElement.innerHTML=madridTime.format("MMMM Do YYYY");
madridTimeElement.innerHTML=madridTime.format("h:mm:ss [<small>]A[</small>]");
}

//Kuala Lumpur

let kualaLumpurElement=document.querySelector("#kuala-lumpur");
if (kualaLumpurElement){
let kualaLumpurDateElement=kualaLumpurElement.querySelector(".date");
let kualaLumpurTimeElement=kualaLumpurElement.querySelector(".time");
let kualaLumpurTime=moment().tz("Asia/Kuala_Lumpur");

kualaLumpurDateElement.innerHTML=kualaLumpurTime.format("MMMM Do YYYY");
kualaLumpurTimeElement.innerHTML=kualaLumpurTime.format("h:mm:ss [<small>]A[</small>]");
}}

function updateCity(event){
    let cityTimezone=event.target.value;
    let cityName=cityTimezone.split("/")[1];
    let cityTime=moment().tz(cityTimezone);
    let citiesElement=document.querySelector(".cities");
    citiesElement.innerHTML=

    `
    <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format ("a")}</small></div>
        </div>
        `
        
}
let citiesDropdown=document.querySelector("#city-dropdown");
        citiesDropdown.addEventListener ("change", updateCity);

updateTime();
setInterval(updateTime, 1000);