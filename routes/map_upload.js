var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('map_upload', { 
  	page_title: 'Map Upload',
  	cat1_link_path: '/',
    cat1_title: 'Map',
    cat2_link_path: 'map_upload',
    cat2_title: 'Upload'

  });
});

module.exports = router;
