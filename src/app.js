const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;