var saveButton = document.querySelectorAll(".savebtn")
// var textarea = document.querySelectorAll(".description")


function currentDate(){
    $('#currentDay').text(moment().format('MMMM Do YYYY'))
}
currentDate();



for(let i = 0; i < saveButton.length; i++){
    saveButton[i].addEventListener("click",(event) => {
        save(event)
    })
}

function save(event){
    let textarea = event.target.parentNode.parentNode.children[1].value
    console.log(textarea)
    localStorage.setItem("userInput", textarea)
    console.log(localStorage.getItem("userInput"))
}


console.log(localStorage.getItem('userInput'))



