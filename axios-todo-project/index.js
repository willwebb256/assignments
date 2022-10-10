// GET's THE TODO's FROM THE DATABASE
function getData(){
    axios.get("https://api.vschool.io/willwebb/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
 }
      
 // LISTS THE TODO TITLES TO THE DOM
 function listData(data){
    // document.getElementById('todo-list').innerHTML = ""
    clearList()
   
    for(let i = 0; i < data.length; i++){
// Posting todo items
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title 
        const container = document.createElement('div')
        container.append(h1)
        if (data[i].completed){
           h1.style.textDecoration = "line-through" 
        }        
        container.style.backgroundColor = "magenta"
// Delete Button
        const deleteButton = document.createElement('button')
        deleteButton.addEventListener("click", () => {
            axios.delete("https://api.vschool.io/willwebb/todo/" + data[i]._id)
            .then(()=> container.remove())
            .catch(err => console.log(err))
            })
        container.append(deleteButton)       
        deleteButton.textContent = "Delete"      
        document.getElementById('todo-list').appendChild(container)
// Check Mark for completed items
        const checkBox = document.createElement('input')
        const checkBoxLabel = document.createElement('label')
        container.append(checkBoxLabel)
        checkBoxLabel.textContent = "Completed?"
        container.append(checkBox)
        checkBox.type = "checkBox"
        checkBox.style.width= "20px"
        if(data[i].completed){
            checkBox.checked
        }

        // const boxCheck = data[i].completed
        checkBox.addEventListener("click", ()=> {
            console.log("checkBox")
            if (checkBox.checked){
                axios.put("https://api.vschool.io/willwebb/todo/" + data[i]._id, {completed: false})
                .then(res => console.log(res))
                .catch(err => console.log(err)) 
                h1.style.textDecoration = "line-through"    
               
          
            } else if (!checkBox.checked){
                axios.put("https://api.vschool.io/willwebb/todo/" + data[i]._id, {completed: true})
                .then(res => console.log(res))
                .catch(err => console.log(err))                
                h1.style.textDecoration = "none"
                
          
        }
    })    
                axios.put("https://api.vschool.io/willwebb/todo/" + data[i]._id, {completed: false})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
        }
        const completeButton = document.createElement('button')
        
        // if (boxCheck === false) {

 }

 // Edit (PUT) Function

// Check Box function uncheck() {
//     document.getElementById("myCheck").checked = false;
// }


// create a check boolean aka item.checked, if true then style it so it has a strikethrough line
//  function check() {
//     document.getElementById("myCheck").checked = true;
// }



// Changing the image source to reflect the imgUrl from the API
// function changeScr() {
//     document.getElementById("imgid").src="books.jpg";
//   }


  
 function clearList(){
    const el = document.getElementById('todo-list')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
 }
  
 getData()
  
  
 // FORM FOR THE POST REQUEST
 const todoForm = document["todo-form"]
  
 todoForm.addEventListener("submit", function(e){
    e.preventDefault()
   
    const newTodo = {
        title: todoForm.title.value
        // description: todoForm.description.value,
        // imgUrl: todoForm.imgUrl.value
        // I want to add these but its throwing an error right now. I think I need to make a for loop to include it? 
    }
   
    todoForm.title.value = ""
   
    axios.post("https://api.vschool.io/willwebb/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
 })
 