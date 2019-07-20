const express = require('express');
const path = require('path');

const logger = require('./middleware/logger')
const members = require('./Members');

const app = express();


// Init middleware
// app.use(logger);

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