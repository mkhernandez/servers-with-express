const express = require("express");
const app = express();
const port = 5000;
const hostName = "localhost";
const log = console.log;

app.use(() => {
    log("We got a new request!");
});

app.listen(port, hostName, () => {
    log(`Server running at https://${hostName}:${port}/`);
});