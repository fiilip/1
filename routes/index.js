const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let responseText = "hello word<br/>";
    responseText +="<small>Requested at:"+ req.requestTime + "</small>";
    res.send(responseText);
});

module.exports = router;
