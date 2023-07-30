// console.log("Tarun, Mandar, Dipesh");

const express = require('express');

const app = express();

// app.use(express.json());

app.get('/', (req, res) => {
    res.send("Test1 done");
});

const PORT = 5000;

app.listen( PORT, () => console.log(`App is running on - ${PORT}`));