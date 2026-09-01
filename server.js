const express = require('express');
const app = express();

app.use(express.json());

let todos = [
  { id: 1, title: 'Learn Git on Termux', completed: true },
  { id: 2, title: 'Deploy Todo API to Render', completed: false }
];

app.get('/', (req, res) => {
  res.json({ message: 'Todo API is live and running!' });
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
