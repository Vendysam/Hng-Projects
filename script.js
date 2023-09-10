function getCurrentUTCTimeInMilliseconds() {
    const currentTimeMilliseconds = new Date().getTime();
    return currentTimeMilliseconds;
}

function updateDisplay() {
    const timeElement = document.getElementById('time');
    const currentTimeMilliseconds = getCurrentUTCTimeInMilliseconds();
    timeElement.textContent = ` ${currentTimeMilliseconds}`;
}

// Update the display initially and every second
updateDisplay();
setInterval(updateDisplay, 1000);


const dateElement = document.querySelector(".date");

const date = new Date ( );
const day = date.getDay( );

const formatDate = ( ) =>{
    return day ==1
    ?  "Monday"
    : day ==2
    ?  "Tuesday"
    : day == 3
    ?  "Wednesday"
    : day == 4
    ?  "Thurday"
    : day ==5
    ?  "Friday"
    : day == 6
    ?  "Saturday"
    : "Sunday";
}; 

dateElement.textContent = formatDate( );


console.log(formatDate);
