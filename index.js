const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the AI Integration System! Here we integrate various AI functionalities for your needs.');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});