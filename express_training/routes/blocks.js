var express = require('express');
var router = express.Router();


var bodyParser = require('body-parser');
var parserUrlencoded = bodyParser.urlencoded({extended: false});

var blocks = {};

router.route('/')
    .get()...
    .post()....
    
router.route('/:name')
        .all()..
        .get()..
        .delete()..

module.exports = router;