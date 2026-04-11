const container = document.getElementById("container")
const day = document.getElementById("day")
const hour = document.getElementById("hour")
const minutes = document.getElementById("minutes")
const second = document.getElementById("second")
const dt = document.getElementById("dt")
const shift = document.getElementById("shift")


const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];


setInterval(() => {

    const date = new Date();

    const dayNum = date.getDay();
    const monthNum = date.getMonth();

    day.textContent = days[dayNum]
    hour.textContent = date.getHours() % 12;
    minutes.textContent = date.getMinutes();
    second.textContent = date.getSeconds();
    dt.textContent = date.getDate() + " " + months[monthNum] + " " + date.getFullYear()
    shift.textContent = date.getHours() > 12 ? "PM" : "AM"
    container.style.backgroundImage = date.getHours() > 12 ? "url('https://i.pinimg.com/originals/59/62/e2/5962e280e4b5486fa60c128927bb5a06.gif')" : "url('https://i.pinimg.com/originals/1c/3e/6c/1c3e6cf5100fc66db16880281354fcdf.gif')"
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";

}, 1000);

