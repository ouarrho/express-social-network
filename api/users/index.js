const express = require('express');
const router = express.Router();

const users = require('../../db/users');

router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    const found = users.some(user => user.id === id);

    if (found) {
        res.json(users.filter(user => user.id === id));
    } else {
        res.status(400).json({
            msg: 'User not found',
        });
    }
});

router.post('/', (req, res) => {
    res.send(req.body);
});

module.exports = router;
