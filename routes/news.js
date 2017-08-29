var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('news', { 
  	page_title: 'Authorized list',
  	cat1_link_path: '/',
    cat1_title: 'Authorized list',
    cat2_link_path: 'news',
    cat2_title: 'Add new'

  });
});

module.exports = router;
