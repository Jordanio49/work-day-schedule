// setting up global variables for my <p> tag currentDay and my save buttons.
const currentDay = document.getElementById('currentDay');
const saveBtn = document.getElementsByClassName('saveBtn');

// set the text content of the currentDay p tag to be a live clock using moment.js
currentDay.textContent = moment().format('MMMM Do YYYY, h:mm a');

// used moment.js to set a variable containing the current time. Also added an array of hours to check them against.
let currentHour = moment().hour();
let hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// created a for loop that kinda does everything on the page. 
for (let i = 0; i < hour.length; i++) {
    // these if, if, else statements check if the current time is ===, <, or other(>) the hour at each index of the array.
    if (currentHour === hour[i]) {
        document.getElementById(i).classList.add('present');
    }
    if (currentHour < hour[i]) {
        document.getElementById(i).classList.add('future');
    }
    else {
        document.getElementById(i).classList.add('past');
    }

    // This creates an event listener for each of the save buttons # 1 - 9
    saveBtn[i].addEventListener('click', function () {
        // gets the value of the textArea (essentially the textContent)
        let textAreaValue = document.getElementById(i).value
        // sets Item to localStorage with key of textArea + i and value of the text content
        localStorage.setItem('textArea' + i, textAreaValue);
    });

    // This gets the textArea element by its id at each index in the loop because its id's are the same as the array indexes.
    let textArea = document.getElementById(i)
    // this is creating a variable that gets the local storage with the key of textArea + i or each of the 9 textAreas
    let getStoredItems = localStorage.getItem('textArea' + i);
    // This changes the text content to the value stored in each textArea.
    textArea.textContent = getStoredItems;
};