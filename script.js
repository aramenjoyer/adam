const express = require('express');
const app = express();
const port = 3000;

let tasks = [
    "Create a formula in cell B2 that adds values in A1 and A2.",
    "Apply bold formatting to the header row.",
    "Insert a chart using data from A1 to B10."
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
