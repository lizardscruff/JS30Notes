// TODO: fix the jumping seconds hand problem
// use some if statements to remove the transition and put it back again
// listen to him explain it at the end of the video

// selecting the hand for seconds and saving it in a variable
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    // this creates a new instance that represents a single moment in time
    // we call Date() as a constructor
    const now = new Date();
    // getSeconds() is a built in method
    const seconds = now.getSeconds();
    // we are basically converting the seconds into it's degree counterpart here
    // we add 90 because the default is 90 and it makes the clock hands go into proper position
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    // we use template literals here to easily connect the current secondsDegrees value
    // into the css position for the hands
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(() => {
    setDate();
}, 1000);

