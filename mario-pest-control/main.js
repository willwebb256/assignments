const form = document.myForm;


   
form.addEventListener("submit", (event) => {
   event.preventDefault()

   let x=form.fname.value;
   let y=form.lname.value;
   let z=form.address.value;
   let a=form.email.value;
   let b=form.phone.value;
   let c=form.goombaNumber.value; 
   let d=form.bombNumber.value;
   let e=form.cheepNumber.value;

const checkedInputs = [];
     for(let i = 0; i < form.baddie.length; i++){
       if(form.baddie[i].checked){
           checkedInputs.push(form.baddie[i].value)
       }
   }
 
   alert("First Name:"+x+"     "+"Last Name:"+y+"     "+"Address:"+z+"     "+"Email:"+a+"    "+"Phone:"+b+"     "+"Types of Baddies:"+checkedInputs+"     "+"Total Sum: "+);

})
  

  
  

