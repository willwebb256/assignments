const form = document.addItem
removeToDo = document.querySelectorAll('.removeBtn'),

// Submit event
form.addEventListener("submit", function(event){
    event.preventDefault()

    let groceryItem = form.title.value
    form.title.value = ""
    
    console.log(groceryItem)

    // 1. Defining what will be produced whenever you type an item and hit submit

    const li = document.createElement("li")

    // 2. This will be the innerHTML stuff that you'll type into the thing

    // li.innerHTML = "<p>"+ groceryItem + "<br><button class='editBtn'>edit</button><button class='removeBtn'>X</button></p>" 
    var editBtn = document.createElement('button')
        editBtn.classList.add('editBtn')
    var removeBtn = document.createElement('button')
        removeBtn.classList.add('removeBtn')

    var paragraph = document.createElement('p')
        paragraph.textContent= groceryItem
        editBtn.textContent= 'Edit'
        removeBtn.textContent='X'
        li.append(paragraph, editBtn, removeBtn)
    //3. This is where we add the command to append after hitting the submit button! 

    document.getElementById("list").append(li)

    
        removeBtn.addEventListener("click", ()=>{
            li.remove()
        })

    


    // var deletes = document.querySelectorAll('.removeBtn')

    // // Iterate all nodes

    // deletes.forEach(btn => {

    // // Attach event listener. Note to preserve the button this-reference
    // // by using the non-shorthand function

    //  btn.addEventListener('click', function() {
    //     var li = this.parentNode
    //     li.remove()
    // })

// edit button stuff:
        
   var edits = document.querySelectorAll('.editBtn')
        edits.forEach(btn => {
        btn.addEventListener('click', function() {
        console.log("Edit Button Pushed")
            var editForm = document.getElementById('editForm')
            editForm.style.display= "block"
            var editInput = document.getElementById('editInput')
            editInput.value = paragraph.textContent
            var saveButton = document.getElementById('saveButton')
            saveButton.addEventListener('click', function(e) { 
                
                
            e.preventDefault()
            paragraph.textContent = editInput.value
            editForm.style.display= "none"
           // li.innerHTML = "<p>"+ groceryItem + "<br><button class='editBtn'>edit</button><button class='removeBtn'>X</button></p>"
            console.log("Save Button Pushed")
            console.log(groceryItem)
        })

            })
        })
        // event.preventDefault()
        // btn.addEventListener("click", function() {
        // event.preventDefault()
        // var li = this.parentNode
        // paragraph.contentEditable = true;

    //})
        
  
       

   

})


   



