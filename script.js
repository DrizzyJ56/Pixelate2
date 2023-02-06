// Your code here
const tableGrab = document.querySelector("table")
const buttonGrab = document.getElementById('add-row')
const selectGrab = document.querySelector("select")
let selectedColor = 'red'

function makeRow(){
    let tr = document.createElement('tr')
    for(let i = 0; i < 20; i++){
        tr.appendChild(document.createElement('td')) 
    }
    tableGrab.appendChild(tr)
}
buttonGrab.addEventListener('click', makeRow)

function colorize(evt){
    let clicked = evt.target
    if(clicked !== tableGrab){
        if(clicked.className.length){
            clicked.className = ''
        }else{
            clicked.className = selectedColor
        }
    }
}
selectGrab.addEventListener('change', function(evt){
    selectedColor = evt.target.value
})



tableGrab.addEventListener('click', colorize)
// tableGrab.addEventListener('click', paint)

