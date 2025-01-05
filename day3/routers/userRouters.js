const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({});
})

router.post('/', (req, res) => {
    const { name, email } = req.body;
    console.log("🚀 ~ router.post ~ { name, email }:", { name, email })
    res.send({});
})

router.delete('/:id', (req, res) => {
    res.send({});
})

router.patch('/:id', (req, res) => {
    res.send({});
})









module.exports = router;
