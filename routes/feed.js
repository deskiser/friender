var router = require('express').Router();
var loadUser = require('../middleware/load_user');
var feed = require('../services/feed');


router.get('/', loadUser, function(req, res) {
 if(!req.user){
     res.redirect('/sign_up');
     return
 }

 feed.nextInFeed(req.user, function(friend){
     res.render('index', { currentUser: req.user, friend: friend })
 })
})

router.post('/decide', loadUser, function(req, res) {
 // TODO: save "decision" to database
 res.redirect('/')
})

module.exports = router
