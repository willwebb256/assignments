const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

// Define the todos array to hold the todo items
const todos = [
    {
        name: "Task 1",
        description: "Description for Task 1",
        imageUrl: "http://www.example.com/image1.jpg",
        completed: false,
        _id: uuidv4()
      },
      {
        name: "Task 2",
        description: "Description for Task 2",
        imageUrl: "http://www.example.com/image2.jpg",
        completed: true,
        _id: uuidv4()
      },
      // Add more todos as needed
];

// Define the endpoints
// TODO: Implement the required endpoints here
app.get('/todos', (req, res) => {
    res.json(todos);
  });
  
app.post('/todos', (req, res) => {
    const newTodo = {
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      completed: false,
      _id: uuidv4()
    };
  
    todos.push(newTodo);
    res.status(201).json(newTodo);
  });
  
  app.put('/todos/:id', (req, res) => {
    const todoId = req.params.id;
    const updatedTodo = req.body;
  
    const todoIndex = todos.findIndex(todo => todo._id === todoId);
    if (todoIndex === -1) {
      return res.status(404).json({ message: 'Todo not found' });
    }
  
    todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
    res.json(todos[todoIndex]);
  });
  
  app.delete('/todos/:id', (req, res) => {
    const todoId = req.params.id;
  
    const todoIndex = todos.findIndex(todo => todo._id === todoId);
    if (todoIndex === -1) {
      return res.status(404).json({ message: 'Todo not found' });
    }
  
    const deletedTodo = todos.splice(todoIndex, 1)[0];
    res.json(deletedTodo);
  });
  
  

// Start the server
const port = 9000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
