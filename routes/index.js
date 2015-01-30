var express = require('express');
var router = express.Router();


// Dates are stored as Unix Epoch timestamps. The resolution is seconds.
// Remember that time resolution in JS is milliseconds
// Feel free to change the API if that suits your needs
var fundraisers = [
    {
        "fundraiserId": 1,
        "startDate": 142248960,
        "endDate": 1427587200,
        "location": "London",
        "openEvent": true,
        "description": "Curae a morbi vestibulum laoreet ligula imperdiet etiam euismod aenean."
    },
    {
        "fundraiserId": 2,
        "startDate": 1423699200,
        "endDate": 1428796800,
        "location": "Brighton",
        "openEvent": false,
        "description": "Iaculis dapibus enim ac per parturient bibendum hendrerit mauris taciti parturient quis diam a arcu."
    },
    {
        "fundraiserId": 3,
        "startDate": 1424649600,
        "endDate": 1435017600,
        "location": "Oxford",
        "openEvent": true,
        "description": "Scelerisque id nullam nisl phasellus lectus mattis aptent est ipsum ullamcorper mi suspendisse."
    },
];

/* GET home page. */
router.get('/', function(req, res) {
    // res.render('index', { title: 'JustGiving coding exercise' });
    res.sendfile(__dirname + '/../views/index.html');
});

/* GET fundraisers. */
router.get('/fundraisers', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(fundraisers));
});

/* GET fundraiser by id. */
router.get('/fundraisers/:fundraiserId', function(req, res) {
    var fundraiserId = req.params.fundraiserId;
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(fundraisers[fundraiserId - 1]));
});

/* POST fundraiser. */
router.post('/fundraisers', function(req, res) {
    var fundraiserId = fundraisers.length + 1;
    req.body['fundraiserId'] = fundraiserId;
    fundraisers.push(req.body);
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(fundraisers));
});

module.exports = router;


