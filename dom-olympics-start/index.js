let newHeader = document.createElement("header")
    newHeader.innerHTML = "<p><h1>JavaScript Made This!!</h1><br><h3><span style='color: peachpuff;'>[Guillermo Webb] </span> wrote the JavaScript!</h3></p>";
    document.body.prepend(newHeader)

newHeader.style.textAlign = "center";
newHeader.style.fontFamily = "Arial";

let newMemoOne = document.getElementById("memoOne")
    newMemoOne.textContent = "Hey Hi, how are ya?"

let newMemoTwo = document.getElementById("memoTwo")
    newMemoTwo.textContent = "What's up my good good brother! Doing excellente, and you?"

let newMemoThree = document.getElementById("memoThree")
    newMemoThree.textContent = "Bro thanks for asking, I'm loving life. Gonna shred the gnar today and probs eat some tacos."

let newMemoFour = document.getElementById("memoFour")
    newMemoFour.textContent = "EPIC! Have fun my friend, I hope you catch some great waves. I'll meet you for tacos luego."

let newNewText = document.getElementById("newText")
    

let clearButtonPush = document.getElementById("clearButton")

clearButtonPush.addEventListener('click', function () {
    newMemoOne.remove();
    newMemoTwo.remove();
    newMemoThree.remove();
    newMemoFour.remove();
    newNewText.remove();
 });

 let dropDownSelection = document.getElementById("themeDropDown")
    let themeOneSelect = document.getElementById("themeOne") //brown/blue
    let themeTwoSelect = document.getElementById("themeTwo") // black/pink


dropDownSelection.addEventListener('change', function (e) {
    var value = e.target.value;
    let messageLeft = document.querySelectorAll(".message.left")
    let messageRight = document.querySelectorAll(".message.right")

    if (value === "themeOne"){
        messageLeft.forEach(element => {
            element.style.backgroundColor = "burlywood";
            element.style.color = "black";
           
        }) 
        messageRight.forEach(element => {
         element.style.backgroundColor = "lightblue";   
        })
        
    } else if (value === "themeTwo"){
        messageLeft.forEach(element => {
            element.style.backgroundColor = "black";
            element.style.color = "white";
            
        })
        messageRight.forEach(element => {
            element.style.backgroundColor = "pink"; 
        })
        
    }
    // newMemoOne.style.backgroundColor = "black";
    // newMemoOne.style.color = "white";
    // newMemoTwo.style.backgroundColor = "pink";
    // newMemoThree.style.backgroundColor = "black";
    // newMemoThree.style.color = "white";
    // newMemoFour.style.backgroundColor = "pink";
}) 
let pushSendIt = document.getElementById("sendIt");
let typeMessage = document.getElementById("inputIt");
let sendNewText = document.getElementById("newText");
let form = document.getElementById("form");

form.addEventListener('submit', function(e) {
    e.preventDefault()   
    let newMessage = document.createElement("div")
    newMessage.className= "message right"
    console.log(typeMessage.value)
    newMessage.textContent = typeMessage.value
    sendNewText.appendChild(newMessage)  
    typeMessage.value = '';

     // let text = document.getElementById('inputIt');     
    // sendNewText.innerHTML = "<div class='left'></div>"
    //sendNewText.innerHTML += text.value;
    // sendNewText.style.alignSelf = "flex-start";
    // sendNewText.style.backgroundColor = "burlywood";

    
//Try these in the future for next project: sendNewText.innerHTML = <div class="left"></div>
// querySelector = [".left"]
// document.getElementsByClassName("right"); 

})





