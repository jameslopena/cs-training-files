var express = require('express');
var app = express();

app.get('/blocks', function (req, res) {
    var blocks = ['one', 'two', 'three'];
    if (req.query.limit >= 0) {
        res.json(blocks.slice(0,req.query.limit));
    } else{
        res.json(blocks);
    }
});

app.listen(3030, function () {
    console.log('listening');
});