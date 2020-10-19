const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
    res.send()
});

app.listen(3000, function () {
    console.log(`Escutando na porta 3000`);
})