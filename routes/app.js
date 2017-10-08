var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/message', function (req, res, next) {
    User.findOne({}, function(err, doc){
        if(err){
          return res.send('Error!');
        }
        res.render('node', { email: doc.email });
    });

});

/*
router.get('/message/:msg', function (req, res, next) {
    res.render('node',{message: req.params.msg});
});*/

router.post('/message',function(req, res, next) {
    var emailx = req.body.email;
    var user = new User({
      firstname: 'Dursun',
      lastname: 'Gundogan',
      password: 'super-secret',
      email: emailx
    });
    user.save(function(err,result){
      if(err)
        return res.send('Err');
    });
    res.redirect('/message');
});

module.exports = router;
