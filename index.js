const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

let classes = [{
        topic: "Math",
        location: "Hendon",
        price: 100,
    },
    {
        topic: "Math",
        location: "Colindale",
        price: 80,
    },
    {
        topic: "Math",
        location: "Brent Cross",
        price: 90,
    },
    {
        topic: "Math",
        location: "Golders Green",
        price: 120,
    },
];

let users = [{
    email: "example@gmail.com",
    password: "hello123",
}, ];

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/users", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(JSON.stringify(users));
});
app.get("/lessons", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(JSON.stringify(classes));
});

app.listen(port, () => {
    console.log("Example app started");
});