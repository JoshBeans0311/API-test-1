const express = require ('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");

app.get('/', (req, res) => {
    res.send("hello");




})

});