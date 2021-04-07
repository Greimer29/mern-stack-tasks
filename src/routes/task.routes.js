const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async(req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.json(tasks);
});

router.post('/', async(req, res) => {
    const { titulo, descripcion } = req.body;
    const task = new Task({ titulo, descripcion });
    await task.save();
    res.json({ status: 'Task saved' });
});

module.exports = router;