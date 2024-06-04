const form = document.querySelector("form");
const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const button = document.querySelector("button");
const inputControl= document.querySelector(".input-control");
const yearsDash = document.querySelector(".years-dash");
const monthsDash = document.querySelector(".months-dash");
const daysDash = document.querySelector(".days-dash");



form.addEventListener("submit", function(e){
    console.log("submit olundu")
    e.preventDefault();
    validateInputs();
    error === false 
    ? ageCal(inputDay.value,inputMonth.value,inputYear.value)
    : err();
});

function err(){
    console.log("error var");
    yearsDash.textContent= "--";
    monthsDash.textContent= "--";
    yearsDash.textContent= "--";
}

let error = false;
const setError = function(element,message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    error = true;
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const setSuccess = function(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

const validateInputs = function(){
    const inputDayValue = inputDay.value;
    const inputMonthValue = inputMonth.value;
    const inputYearValue = inputYear.value;

    if(inputDayValue === ""){
        console.log("This field is required");
        setError(inputDay, "This field is required");
    }else if(!(inputDayValue > 0 && inputDayValue < 32)){
        console.log("Must be a valid day");
        setError(inputDay, "Must be a valid day")
    }else if(inputMonthValue % 2 === 0){
        if(!(inputDayValue> 0 && inputDayValue < 31)){
            console.log("Must be a valid day");
        setError(inputDay, "Must be a valid day");
        }
    }else if(inputMonthValue % 2 === 1){
        if(!(inputDayValue > 0 && inputDayValue < 32)){
            console.log("Must be a valid day");
        setError(inputDay, "Must be a valid day") 
        }
    }
    else{
        console.log("success");
        setSuccess(inputDay);
        localStorage.setItem("day", inputDayValue);
    }


    if(inputMonthValue=== ""){
        console.log("This field is required");
        setError(inputMonth, "This field is required")
    }else if(!(inputMonthValue > 0 && inputMonthValue < 13)){
        console.log("Must be a valid day");
        setError(inputMonth, "Must be a valid day")
    } else{
        console.log("success");
        setSuccess(inputMonth);
        localStorage.setItem("month", inputMonthValue);
    }



    if(inputYearValue === ""){
        console.log("This field is required");
        setError(inputYear, "This field is required")
    }else if(!(inputYearValue > 0 && inputYearValue < 2024)){
        console.log("Must be in the past");
        setError(inputYear, "Must be in the past")
    } else{
        console.log("success");
        setSuccess(inputYear);
        localStorage.setItem("year", inputYearValue);
    }
};

const d = new Date();
let thisDay = d.getDay();
let thisMonth =1+ d.getMonth();
let thisYear = d.getFullYear();


const ageCal = function(day,month,year){
   if(thisDay < day){
    daysDash.innerHTML = (thisDay - day + 30);
    thisMonth = thisMonth-1;
   } else{
    daysDash.innerHTML = thisDay-day;
   }

   if(thisMonth < month){
    monthsDash.innerHTML = (thisMonth-month + 12);
    thisYear= thisYear-1;
   }else{
    monthsDash.innerHTML= thisMonth- month
   }

   yearsDash.innerHTML = thisYear-year;
};