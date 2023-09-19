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
    res.send("This is the home page!");
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

app.get('*', (req, res) => {
    res.send(`I don't know that path!`);
});

app.listen(port, hostName, () => {
    log(`Server running at https://${hostName}:${port}/`);
});