const express = require('express');
const router = express.Router();
//const config = require('../configs/config');
//const db = require('../mongo/mongo');

const addState = require('../models/farmerModel');

router.post('/', (req, res, next) => {
    let newState = new addState({
        state: req.body.state_alpha,
        avgAge: req.body.data[0].Value
    });
    addState.save(function(err) {
        if (err) {
            return res.send({success: false, message: "Please enter a 2-digit state code"});
        }
        else
            res.send({success: true, message: "Added state to cache"});
    });
});

router.get('/', (req, res, next) => {
    addState.find((err, states)=> {
        if (err) {
            res.send({success: false, message: "Could not find state"});
        }
        else {
            let data = {
                "state": states.state,
                "age": states.avgAge
            }
            res.send(data);
        }
    });
});



/*ps4
router.get('/', function(req, res, next) {

    const options = {
        url: url,
        qs: {
            key: key,
            group_desc: gd,
            agg_level_desc: ald,
            year: year,
            short_desc: sd,
            state_alpha: state
        }
    }

    request(options, function(error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        res.render('usdata', JSON.parse(body));
    });
});
*/

module.exports = router;