var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('authorized', { 
  	page_title: 'Authorized list',
  	cat1_link_path: '/',
    cat1_title: 'Authorized list',
    cat2_link_path: 'authorized',
    cat2_title: 'Person'

  });
});

module.exports = router;
