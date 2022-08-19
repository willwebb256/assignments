const form = document.myForm;


   
form.addEventListener("submit", (event) => {
   event.preventDefault()

   let fName=form.fname.value;
   let lName=form.lname.value;
   let address=form.address.value;
   let email=form.email.value;
   let phone=form.phone.value;
   let goombaNumber=form.goombaNumber.value; 
   let bombNumber=form.bombNumber.value;
   let cheepNumber=form.cheepNumber.value;

   
   goombaNumber = Number (goombaNumber) * 5;
   bombNumber = Number (bombNumber) * 7;
   cheepNumber = Number (cheepNumber) * 11;
  
//    // 1 . <h1></h1>
//    const h1 = document.createElement('h1')
//    // 2. <h1>The Sum of the Two Inputs</h1>
//    h1.textContent = parseFloat(c) + parseFloat (d) + parseFloat (e);
//    // 3. Append
//    document.getElementsByTagName("body")[0].append(h1)

const checkedInputs = [];
     for(let i = 0; i < form.baddie.length; i++){
       if(form.baddie[i].checked){
           checkedInputs.push(form.baddie[i].value)
       }
   }
 
   alert("First Name: "+fName+"\n"+"Last Name: "+lName+"\n"+"Address: "+address+"\n"+"Email: "+email+"\n"+"Phone: "+phone+"\n"+"Types of Baddies: "+checkedInputs+"\n\n\n"+"Total Sum: " + Number(goombaNumber + bombNumber + cheepNumber) + " Coins");

})
  

  
  

