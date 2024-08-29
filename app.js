let hr = document.getElementById("hour");
let min = document.getElementById("min")
let sec = document.getElementById("sec")


function displaytime(){
let date = new Date();

let hh = date.getHours();
let mm = date.getMinutes();
let ss = date.getSeconds();


let hrotation = 30*hh +mm/2
let mrotation = 6*mm;
let srotation = 6*ss;

hr.style.transform = `rotate(${hrotation}deg)`
min.style.transform = `rotate(${mrotation}deg)`
sec.style.transform = `rotate(${srotation}deg)`


}
setInterval(displaytime , 1000);

// function setClock() {
//     const hourHand = document.getElementById('hour');
//     const minuteHand = document.getElementById('minute');
//     const secondHand = document.getElementById('second');

//     const currentDate = new Date();
//     const secondsRatio = currentDate.getSeconds() / 60;
//     const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
//     const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

//     setRotation(secondHand, secondsRatio);
//     setRotation(minuteHand, minutesRatio);
//     setRotation(hourHand, hoursRatio);
// }

// function setRotation(element, rotationRatio) {
//     element.style.transform = `rotate(${rotationRatio * 360}deg)`;
// }

// setInterval(setClock, 1000);
// setClock();

