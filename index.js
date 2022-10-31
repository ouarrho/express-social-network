const express = require('express');
const app = express();
const path = require('path');

const logger = require('./middleware/logger');

//app.use(logger);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const users = require('./api/users/index');

app.use('/api/users', require('./api/users/index'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ' + PORT));
