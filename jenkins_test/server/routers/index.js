/**
 * Created by IvanCai on 2017/4/1.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
router.use(function (req, res, next) {
    res.sendFile(path.resolve(__dirname, '../../index.html'));
})

module.exports = router