var saveButton = document.querySelectorAll(".savebtn")
// var textarea = document.querySelectorAll(".description")


function currentDate(){
    $('#currentDay').text(moment().format('MMMM Do YYYY'))
}
currentDate();


function initialize(){
    var storageArr = JSON.parse(localStorage.getItem('userInput'))
    var textAreas = document.querySelectorAll('.description')
    var container = document.querySelector('.container')

    for(var i = 0; i < saveButton.length; i++){

        saveButton[i].addEventListener("click",(event) => {
            save(event)
        })

        textAreas[i].value = storageArr[i]


    }

    var date = new Date()

    var hours = date.getHours()

    for(var i = 0; i < 9; i++){
        if(parseInt(container.children[i].id) < hours){
            container.children[i].classList.add('past')
        }else if(parseInt(container.children[i].id) === hours){
            container.children[i].classList.add('present')
        }else{
            container.children[i].classList.add('future')
        }
    }


    console.log(hours)

    console.log(date)

    //var arr = []
    // for(let i = 0; i < 9; i++){
    //     arr.push('')
    // }
   


    // localStorage.setItem("userInput", JSON.stringify(arr))
}

initialize()

function save(event){
    var id =  event.target.parentNode.parentNode.id
    var container = event.target.parentNode.parentNode.parentNode
    var textarea = event.target.parentNode.parentNode.children[1].value

    for(var i = 0; i < container.children.length; i++){
        if(id === container.children[i].id){
            var storageArr = JSON.parse(localStorage.getItem('userInput'))
            storageArr[i] = textarea
            localStorage.setItem("userInput", JSON.stringify(storageArr))
        }
    }
    
    console.log(localStorage.getItem("userInput"))
}






