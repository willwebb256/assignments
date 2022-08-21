let count = 0;
let buttonMagic = document.getElementById("myButton");
let divSection = document.getElementById("showCount");
let timeLeft = 30;
    let elem = document.getElementById('some_div');
    
    let timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }

 buttonMagic.addEventListener('mousedown', function(){
     buttonMagic.style.backgroundColor = "red"
 });

 buttonMagic.addEventListener('mouseup', function(){
    buttonMagic.style.backgroundColor = "yellow"
});

buttonMagic.addEventListener('mouseover', function(){
    buttonMagic.style.backgroundColor = "blue"
});

buttonMagic.addEventListener('mouseleave', function(){
    buttonMagic.style.backgroundColor = "orange"
});
 
buttonMagic.addEventListener('dblclick', function(){
    buttonMagic.style.backgroundColor = "green"
});
  


document.onkeyup = function (event) {
    let keyCode = window.event ? window.event.keyCode : event.which;
    //alert(keyCode);
    if (keyCode == 82 ) {
        buttonMagic.style.backgroundColor = "red";
    } else if (keyCode == 66) {
        buttonMagic.style.backgroundColor = "blue";
    } else if (keyCode == 89) {
        buttonMagic.style.backgroundColor = "yellow";
    } else if (keyCode == 71) {
        buttonMagic.style.backgroundColor = "green";
    } else if (keyCode == 79) {
        buttonMagic.style.backgroundColor = "orange";
    } else if (keyCode == 90) {
        buttonMagic.style.backgroundColor = "gainsboro";
    }
}

buttonMagic.addEventListener('click', (e)=>{
    count++;
    divSection.innerHTML=`<center>Number of Clicks are: ${count}`;
});

