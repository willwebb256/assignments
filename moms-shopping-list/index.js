const form = document.addItem
removeToDo = document.querySelectorAll('.removeBtn'),

// Submit event
form.addEventListener("submit", function(event){
    event.preventDefault()

    const groceryItem = form.title.value
    form.title.value = ""
    
    console.log(groceryItem)

    // 1. Defining what will be produced whenever you type an item and hit submit

    const ul = document.createElement("ul")

    // 2. This will be the innerHTML stuff that you'll type into the thing

    ul.innerHTML = "<ul class='list > li'>"+ groceryItem + "<br><button class='editBtn'>edit</button><button class='removeBtn'>X</button>" 

    //3. This is where we add the command to append after hitting the submit button! 

    document.getElementById("list").append(ul)


    var deletes = document.querySelectorAll('.removeBtn')

    // Iterate all nodes

    deletes.forEach(btn => {

    // Attach event listener. Note to preserve the button this-reference
    // by using the non-shorthand function

     btn.addEventListener('click', function() {
        var li = this.parentNode
        li.remove()
    })

// edit button stuff:
        
    var edits = document.querySelectorAll('.editBtn')

    edits.forEach(btn => {
        //event.preventDefault()
        //btn.addEventListener("click", function() {
        //event.preventDefault()
        //var li = this.parentNode
        //paragraph.contentEditable = true;

    })
        
  
     console.log()   

   

})


   
})



