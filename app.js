function calculateBMI() {
    let monthInputFeild = document.getElementById("monthInputFeild").value;
console.log("monthInputFeild: ",monthInputFeild)

let dayInputFeild = document.getElementById("dayInputFeild").value;
console.log("dayInputFeild: ",dayInputFeild)



if(monthInputFeild=="January"){
    monthInputFeild=1
  
  } else if (monthInputFeild=="February"){
    monthInputFeild=2
  } 
  else if (monthInputFeild=="March"){
    monthInputFeild=3
  } 
  else if (monthInputFeild=="April"){
    monthInputFeild=4
  } 
  else if (monthInputFeild=="May"){
    monthInputFeild=5
  } 
  else if (monthInputFeild=="June"){
    monthInputFeild=6
  } 
  else if (monthInputFeild=="July"){
    monthInputFeild=7
  } 
  else if (monthInputFeild=="August"){
    monthInputFeild=8
  } 
  else if (monthInputFeild=="September"){
    monthInputFeild=9
  } 
  else if (monthInputFeild=="October"){
    monthInputFeild=10
  } 
  else if (monthInputFeild=="November"){
    monthInputFeild=11
  } 
  else if (monthInputFeild=="December"){
    monthInputFeild=12
  } else{
    alert("Please select month of birthday")
  };

console.log("monthInputFeild: ", monthInputFeild)
  let currentTime = new Date();

let currentMonth = currentTime.getMonth();

let Month =  monthInputFeild - (currentMonth + 1);


if (Month < 0) {
  Month = Month + 12
} else {
  Month = Month
}
  

let addingMonths = "Months";

if (Month === 0 || Month === 1) {
  addingMonths = "Month";
} else {
  addingMonths = "Months";
}
 console.log("Month: ", Month)

let currentDate = currentTime.getDate();

let date = dayInputFeild - currentDate

if (date < 0) {
  date = date + 30
  Month = Month -1
} else {
  date
}

let addingDates = "Days";

if (date === 0 || date === 1) {
  addingDates = "Day";
} else {
  addingDates = "Days";
}
console.log("Date: ", date)

let currentHour = currentTime.getHours();


if (currentHour === 0) {
  currentHour = 24;
  date = date - 1;
} else {
  currentHour = currentHour;
}

let hour = 24 - currentHour;


let addingHour = "Hours";
if (hour === 1 || hour === 0) {
  addingHour = "Hour";
} else {
  addingHour = addingHour;
}


let combine1 = `${Month} ${addingMonths}`;

  let combine2 = `${date} ${addingDates}`;

  let combine3 = `${hour} ${addingHour}`;


console.log("combine1: ",combine1);
console.log("combine2: ",combine2);
console.log("combine3: ",combine3);


document.querySelector(`#result1`).innerText = combine1;

document.querySelector(`#blockNone`).style.display = "block";

document.querySelector(`#result2`).innerHTML = combine2;

document.querySelector(`#result3`).innerHTML = combine3;

}

// setTimeout(function calculateBMI(){
//   window.location.reload();
// }, 15000);
