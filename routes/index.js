var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Web Developer',
    subtitle: 'Ashley Conejo' 
  });
});

router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Web Developer' 
  });
});


/* GET About Me page. */
router.get('/About', function(req, res, next) {
  res.render('index', { title: 'About Me'
 });
});

/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Contact Me page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});




module.exports = router;
