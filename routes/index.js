var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'P&M' });
});

router.get('/registration', function(req, res, next){
    res.render('/registration', {title: 'Registrazione'});
});

router.post('/registration', passport.authenticate('local.signup', {

}))

module.exports = router;