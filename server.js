var express = require('express');
var app = express();
var imageSearch = require('node-google-image-search');
var history = [];
app.get('/search/:TERMS', function(req, res) {
  var results = imageSearch(req.params.TERMS, function(final){
      res.send(final);
      history.push(req.params.TERMS);
    }, req.query.offset, 5);
});
app.get('/latest', function(req,res){
  res.send(history);
});
app.listen(8080, function () {
  console.log('Image Search app listening on port 8080');
});