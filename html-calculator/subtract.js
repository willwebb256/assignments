const formSubtract = document["my-form-subtract"]

// Submit event for Subtraction:
 
formSubtract.addEventListener("submit", function(event){
    event.preventDefault()
   
    const firstNumberSubtract = formSubtract.firstNumberSubtract.value
    const secondNumberSubtract = formSubtract.secondNumberSubtract.value
    formSubtract.firstNumberSubtract.value = ""
    formSubtract.secondNumberSubtract.value = ""
   
    // 1 . <h1></h1>
    const h1 = document.createElement('h1')
    // 2. <h1>The Sum of the Two Inputs</h1>
    h1.textContent = parseFloat(firstNumberSubtract) - parseFloat (secondNumberSubtract);
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)
 })