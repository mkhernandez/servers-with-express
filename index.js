const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const hostName = "localhost";
const log = console.log;

// Setting ejs for our view engine
// Must install with npm i ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // set the path so that file can be ran from any directory

// commented out so that it doesn't interfere with our routes
// app.use((req, res) => {
//     log("We got a new request!");
//     res.send("<h1>We got your request. This is the response!</h1>");
// });

app.get('/', (req, res) => {
    res.render('home');
});

// path parameter example
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${ subreddit } subreddit</h1>`);
});

// path parameter router example
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    log(req.params);
    res.send(`<h1>Viewing postId: ${postId} on the ${subreddit.toUpperCase()} SUBREDDIT</h1>`);
});

// passing data to templates
// leave out as much logic so that our templates are generic
app.get('/rand', (req, res) => {
    const number = Math.floor(Math.random() * 10) + 1;
    res.render('random', {number});
});

app.get('/cats', (req, res) => {
    res.send("MEOW!");
});

app.post('/cats', (req, res) => {
    res.send(`POST REQUEST TO CATS! THIS IS A POST REQUEST!`);
});

app.get('/dogs', (req, res) => {
    res.send("WOOF!");
});

// query string example
app.get('/search', (req, res) => {
    const {q} = req.query;
    res.send(`<h1>Search results for ${q}</h1>`);
});

app.get('*', (req, res) => {
    res.send(`I don't know that path!`);
});

app.listen(port, hostName, () => {
    log(`Server running at https://${hostName}:${port}/`);
});