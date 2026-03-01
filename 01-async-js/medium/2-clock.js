// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
const now = new Date()
console.log(now);

const hours = now.getHours();
const min = String(now.getMinutes()).padStart(2, "0");
const sec = String(now.getSeconds()).padStart(2, "0")

function formatTime24(){
    return `${hours}:${min}:${sec}`
}
console.log(formatTime24());

function formatTime12(){
    const ampm = hours>=12 ? "PM" : "AM";
    
     

}