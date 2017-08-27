var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	page_title: 'Dashboard',
  	cat1_link_path: '/',
    cat1_title: 'Dashboard'
  });
});

module.exports = router;
