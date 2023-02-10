var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'})
});

router.get('/about', function(req, res, next) {
  res.render('about_me', { title: 'About Me'})
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects page' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services page' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
