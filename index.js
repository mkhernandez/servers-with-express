const express = require("express");
const app = express();
const port = 5000;
const hostName = "localhost";
const log = console.log;

// commented out so that it doesn't interfere with our routes
// app.use((req, res) => {
//     log("We got a new request!");
//     res.send("<h1>We got your request. This is the response!</h1>");
// });

app.get('/', (req, res) => {
    res.send("Welcome to the home page!");
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