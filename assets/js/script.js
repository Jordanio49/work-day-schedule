const currentDay = document.getElementById('currentDay');
const saveBtn = document.getElementsByClassName('saveBtn');

currentDay.textContent = moment().format('MMMM Do YYYY, h:mm a');

let currentHour = moment().hour();
let hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i = 0; i < hour.length; i++) {
    if (currentHour === hour[i]) {
        document.getElementById(i).classList.add('present');
    }
    if (currentHour < hour[i]) {
        document.getElementById(i).classList.add('future');
    }
    else {
        document.getElementById(i).classList.add('past');
    }
    
    saveBtn[i].addEventListener('click', function () {
        var textArea = document.getElementById(i).value
        var save = this.getAttribute('button-id')
        localStorage.setItem(save, textArea);
        console.log(localStorage)
    });
};