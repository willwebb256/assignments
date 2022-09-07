// Click  score creatd in Local storage
let clicks= localStorage.getItem("clicks")
function clickStorage(){
    let clicking =clickStorage
    if (clicking >=clicks){
        localStorage.setItem("clicks", taps)
        document.getElementById("TheClick").textContent=`New clicks = ${taps}`
    }
if (clicks !== null){
    document.getElementById("TheClick").append(`clicks: ${clicks} ` )
}
countDown= true


document.getElementById("count").textContent=0
let counter= document.getElementById("count").textContent
document.getElementById("click").addEventListener("onclick", clickEvent)

function clickEvent(){
    documents.getElementById("TheClick"). textContent= ++1
    clickStorage()
    if (countDown == true){
        startTimer()
    }
    countDown = false

}
let timer = 30

function startTimer(){
    let timeInterval= setInterval(function(){
        let timeOff= --timer
        document.getElementById("count").textContent=`Timer:${count}`
        if (timeOff ===0){
            return clearInterval(timeInterval)
        }
    }, 1000)
}

}

setTimeout (function(){
    document.getElementById("click").removeEventListener("onclick", clickEvent)
}, 30000)