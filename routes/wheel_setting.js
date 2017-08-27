var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('wheel_setting', { 
    page_title: 'Wheel Setting',
    
    cat1_link_path: '/',
    cat1_title: 'Wheel',
    cat2_link_path: 'wheel_setting',
    cat2_title: 'Setting'
  });
});

module.exports = router;
