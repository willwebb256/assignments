const formMult = document["my-form-multiply"]

// Submit event for Subtraction:
 
formMult.addEventListener("submit", function(event){
    event.preventDefault()
   
    const firstNumberMult = formMult.firstNumberMult.value
    const secondNumberMult = formMult.secondNumberMult.value
    formMult.firstNumberMult.value = ""
    formMult.secondNumberMult.value = ""
   
    // 1 . <h1></h1>
    const h1 = document.createElement('h1')
    // 2. <h1>The Sum of the Two Inputs</h1>
    h1.textContent = parseFloat(firstNumberMult) * parseFloat (secondNumberMult);
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)
 })