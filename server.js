const express = require('express');
const app = express();
const PORT = 3001;

const persons = [
  { "id": "1", "name": "Arto Hellas", "number": "040-123456" },
  { "id": "2", "name": "Ada Lovelace", "number": "39-44-5323523" },
  { "id": "3", "name": "Dan Abramov", "number": "12-43-234345" },
  { "id": "4", "name": "Mary Poppendieck", "number": "39-23-6423122" }
];

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Phonebook API!');
});

// Route for the phonebook data
app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
