const timeElement = document.querySelector(".time");

const dateElement = document.querySelector(".date");

/**
 *  #param {Date} date
 **/
 
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
timeElement.textContent =Date.now( );

console.log(formatDate);
console.log((Date.now));
