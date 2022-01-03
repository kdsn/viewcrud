var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});
router.post('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.get('/registrer', function(req, res, next) {
  res.render('registrer', { title: 'Registration' });
});
router.get('/beskeder', function(req, res, next) {
  res.render('beskeder', { title: 'Beskeder' });
});

module.exports = router;
