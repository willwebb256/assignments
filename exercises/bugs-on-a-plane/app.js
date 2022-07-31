

var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
var query = document.querySelector("[data-name=form]");


function formAlert() {

    var firstName = form["first-name"].value;
    var lastName = form["last-name"].value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form["travel-location"].value;
    var diet;
    if (form.vegan.checked) {
        diet.push(document.getElementById('vegan').value);
    }
    else if (form.gluten.checked) {
        diet.push(document.getElementById('gluten').value);
    }
    else if (form.paleo.checked) {
        diet.push(document.getElementById('paleo').value);
    }

    // newWindow = window.open("", "_blank");
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

form.addEventListener("submit", function(e){
    e.preventDefault()
    formAlert()
})

// var popup = Runner.displayPopup( {
//     html: "<h1>Hello world!</h1><p>It works</p>",
//     header: 'Custom popup text'
// });



// form.addEventListener("submit", function(formAlert){
//     formAlert.preventDefault();

// })





    // DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=500,height=700')
    
    // message = "<ul><li><b>FirstName: </b>" + firstName;
    // message += "<li><b>LastName: </b>" + lastName;
    // message += "<li><b>Age: </b>" + age;
    // message += "<li><b>Gender: </b>" + gender;
    // message += "<li><b>Location: </b>" + location;
    // message += "<li><b>Diet: </b>" + diet; + "</ul>";
    // DispWin.document.write(message);



// submit.addEventListener('click', formAlert);
  

// document.querySelector('.form')submit.addEventListener('click', function(){
//         formAlert.preventDefault();   
// });

// addEventListener('submit', (event) => {});

// onsubmit = (event) => { };

// document.getElementById('airline-form').addEventListener('submit', function(formAlert){
//     formAlert.preventDefault();

// })
