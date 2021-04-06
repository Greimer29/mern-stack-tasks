const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hi little bitch`)
})

module.exports = router;