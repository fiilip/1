const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('siggi er geggjaður');
});

module.exports = router;
