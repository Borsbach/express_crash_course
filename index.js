const express = require('express');
const path =require('path');

const app = express();

const members = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active'
    },
    {
        id: 2,
        name: 'Alex B',
        email: 'alex@gmail.com',
        status: 'active'
    },
    {
        id: 3,
        name: 'Jane Donnel',
        email: 'jane@yahoo.com',
        status: 'active'
    }
]
// Get request for all members
app.get('/api/members', (req, res) => res.json(members));


// Single path for folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))