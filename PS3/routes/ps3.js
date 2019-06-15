const express = require('express');
const router = express.Router();

//GET
router.get('/', function(req, res, next) {
    res.render('ps3', {string: 'This is your PS3.'});
});

router.post('/post', function(req, res, next) {
    params = {
        string: 'This is your PS3.',
        length: '17'
    }
    res.render('ps3', params)
});

module.exports = router;
