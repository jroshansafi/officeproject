const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(`.min-hand`)
const hourHand = document.querySelector(`.hour-hand`)

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    console.log(seconds);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    console.log(mins);

    const hour = now.getMinutes();
    const hourDegrees = ((mins / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hour);
}

setInterval(setDate, 1000);
