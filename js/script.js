var saveButton = document.querySelector(".savebtn")
var textarea = document.querySelector(".description")


function currentDate(){
    $('#currentDay').text(moment().format('MMMM Do YYYY'))
}
currentDate();


saveButton.addEventListener("click",save())

function save(){

    console.log(textarea);
    localStorage.setItem("userInput", textarea)
}
