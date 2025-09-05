const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});