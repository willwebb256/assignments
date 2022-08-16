const form = document.myForm;


   
form.addEventListener("submit", (event) => {
   event.preventDefault()

   var x=form.fname.value;
   var y=form.lname.value;
   var z=form.age.value;
   var a=form.gender.value;
   var b=form.city.value;
   var c=form.diet.value; 

const checkedInputs = [];
     for(let i = 0; i < form.diet.length; i++){
       if(form.diet[i].checked){
           checkedInputs.push(form.diet[i].value)
       }
   }
 
   alert("First Name:"+x+"     "+"Last Name:"+y+"     "+"Age:"+z+"     "+"Pronouns:"+a+"    "+"Destination:"+b+"     "+"Dietary Restrictions:"+checkedInputs+"     ");

})
  

  
  

