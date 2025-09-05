const express = require('express');
const router = express.Router();

// Beispiel für eine API-Route
router.get('/example', (req, res) => {
    res.json({ message: 'Dies ist ein Beispiel für eine API-Route.' });
});

module.exports = router;
