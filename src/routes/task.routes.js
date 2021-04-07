const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', (req, res) => {
    Task.find((err, tasks) => {
        console.log(tasks)
    });
    res.json({
        status: "Our API Works and you sucks"
    });
});

module.exports = router;