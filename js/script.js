var saveButton = document.querySelectorAll(".savebtn")
// var textarea = document.querySelectorAll(".description")


function currentDate(){
    $('#currentDay').text(moment().format('MMMM Do YYYY'))
}
currentDate();


function initialize(){
    let storageArr = JSON.parse(localStorage.getItem('userInput'))
    let textAreas = document.querySelectorAll('.description')
    let container = document.querySelector('.container')

    for(let i = 0; i < saveButton.length; i++){

        saveButton[i].addEventListener("click",(event) => {
            save(event)
        })

        textAreas[i].value = storageArr[i]


    }

    let date = new Date()

    let hours = date.getHours()

    for(let i = 0; i < 9; i++){
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

    // let arr = []
    // for(let i = 0; i < 9; i++){
    //     arr.push('')
    // }
   


    // localStorage.setItem("userInput", JSON.stringify(arr))
}

initialize()

function save(event){
    let id =  event.target.parentNode.parentNode.id
    let container = event.target.parentNode.parentNode.parentNode
    let textarea = event.target.parentNode.parentNode.children[1].value

    for(let i = 0; i < container.children.length; i++){
        if(id === container.children[i].id){
            let storageArr = JSON.parse(localStorage.getItem('userInput'))
            storageArr[i] = textarea
            localStorage.setItem("userInput", JSON.stringify(storageArr))
        }
    }
    
    console.log(localStorage.getItem("userInput"))
}






