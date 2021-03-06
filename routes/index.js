var express = require('express');
var router = express.Router();
var csfr = require('csurf');
var passport = require('passport');

var csfrProtection = csfr()
router.use(csfrProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('user/login', { title: 'P&M' });
});

router.get('/registration', function(req, res, next) {
    res.render('user/registration', { csfrToken: req.csrfToken() });
});

router.post('/registration', passport.authenticate('local.signup', {
    successRedirect:'/',
    failureRedirect: '/registration'
}));

/*router.get('/', function(req,res, next){
    res.render('user/login')
})
*/

module.exports = router;