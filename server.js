const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.send('Lisa Miller');
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})