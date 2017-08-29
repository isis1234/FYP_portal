var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('log_record', { 
    page_title: 'Log record',
    
    cat1_link_path: '/',
    cat1_title: 'Log record',
    cat2_link_path: 'log_record',
  });
});

module.exports = router;
