var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
  res.render('index', {title: "home page"});
});
router.get('/about', function(req, res, next){
  res.render('about', {tittle: "about us"});
});
module.exports = router;
