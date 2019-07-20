const express = require('express');
const path = require('path');

const logger = require('./middleware/logger')

const PORT = process.env.PORT || 5000;

const app = express();


// Init middleware
app.use(logger);



// Single path for folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API routes
app.use('/api/members', require('./routes/api/members'));


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))