const express = require('express');
const app = express();

const persons = [
    { id: "1", name: "Arto Hellas", number: "040-123456" },
    { id: "2", name: "Ada Lovelace", number: "39-44-5323523" },
    { id: "3", name: "Dan Abramov", number: "12-43-234345" },
    { id: "4", name: "Mary Poppendieck", number: "39-23-6423122" }
];

// Route for /api/persons
app.get('/api/persons', (req, res) => {
    res.json(persons);
});

// Route for /info
app.get('/info', (req, res) => {
    const numEntries = persons.length;
    const currentTime = new Date();

    res.send(`
        <p>Phonebook has info for ${numEntries} people</p>
        <p>${currentTime}</p>
    `);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
