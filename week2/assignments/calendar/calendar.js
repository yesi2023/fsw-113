// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with
// zero, month numbers go from 1-12

// modify this script to use the first day of the month the user selects in place of the const today
// modify this script to run a function called printCalendar() when the user clicks the "Go" button

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let selectingMonth = document.querySelector("#selectingMonth");
let selectTheYear = document.querySelector("#selectTheYear");
let goButton = document.querySelector("#Go");
selectingMonth.value = months[0];

selectTheYear.value = new Date().getFullYear();
window.addEventListener("load", function () {
  if (selectingMonth.childElementCount < 12) {
    for (y = 0; y < months.length; y++) {
      var selectMonth = document.createElement("option");
      selectMonth.textContent = months[y];
      selectMonth.setAttribute("value", months[y]);
      selectingMonth.append(selectMonth);
    }
  }
});

let theGo = document.getElementById("go");
theGo.addEventListener("click", printCalendar);
printCalendar();

function printCalendar() {
  const today = new Date(`${selectingMonth.value} ${selectTheYear.value}`);
  const months = today.getMonth();

  let days;
  switch (months) {
    case 1:
      days = 28;
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      days = 30;
      break;
    default:
      days = 31;
  }

  document.getElementById("calendarDays").innerHTML = "";

  let x;
  const weekday = today.getDay();
  for (x = 0; x < weekday; x++) {
    document.getElementById("calendarDays").innerHTML +=
      "<div class='blankDay'>&nbsp;</div>";
  }

  let dt = 0;
  do {
    dt++;
    document.getElementById(
      "calendarDays"
    ).innerHTML += `<div class='calendarCell'>${dt}</div`;
  } while (dt < days);

  const remainder = 7 - ((x + dt) % 7);
  let y = 0;
  while (y < remainder) {
    document.getElementById("calendarDays").innerHTML +=
      "<div class='blankDay'>&nbsp;</div>";
    y++;
  }
}
