const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to serve static files
app.use('/public', express.static(path.join(__dirname, 'public')));

// Redirect default page to home page
app.get('/', (req, res) => {
    res.redirect(301, '/home');
});

// Serve the index.html file at the /home route
app.get('/home', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is Successfully Running on http://localhost:" + PORT);
    } else {
        console.error(`Error occurred, server can't start, ${error.message}`);
    }
});
