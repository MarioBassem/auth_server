const express = require('express');
const db = require('./db/connection');
const sync = require('./db/sync');

const app = express();
const PORT = process.env.PORT || 3000;

db.authenticate().then(() => {
    console.log("Database connected...");
}).catch(err => {
    console.log('Database connection error: ' + err + '\n');
});

sync();

app.use(express.json());

app.use('/register', require('./routes/register'));

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});