const formAdd = document["my-form"]

 
// Submit event for Addition:
 
formAdd.addEventListener("submit", function(event){
   event.preventDefault()
  
   const firstNumberAdd = formAdd.firstNumberAdd.value
   const secondNumberAdd = formAdd.secondNumberAdd.value
   formAdd.firstNumberAdd.value = ""
   formAdd.secondNumberAdd.value = ""
  
   // 1 . <h1></h1>
   const h1 = document.createElement('h1')
   // 2. <h1>The Sum of the Two Inputs</h1>
   h1.textContent = parseFloat(firstNumberAdd) + parseFloat (secondNumberAdd);
   // 3. Append
   document.getElementsByTagName("body")[0].append(h1)
})





































// const names = [ "Jerry", "Adam" ]

// const person = { firstName: "Robert", lastName: "Jones", age: 37 }

// var firstName = names.push(person.firstName)

// // console.log(person.firstName)

// // const newNames = names + person;

// // console.log(newNames)

// console.log(names)