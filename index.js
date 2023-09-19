const express = require("express");
const app = express();
const port = 5000;
const hostName = "localhost";
const log = console.log;

app.use((req, res) => {
    log("We got a new request!");
    res.send("<h1>We got your request. This is the response!</h1>");
});

app.listen(port, hostName, () => {
    log(`Server running at https://${hostName}:${port}/`);
});