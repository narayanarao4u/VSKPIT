const router = require('express').Router();

let assest = require('./controller/assest.controller');
let ipData = require('./controller/ip.controller');
let custDailing = require('./controller/custDailing.controller');



router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

router.route('/custDailing')
    .get(custDailing.index)
    .post(custDailing.new)
    .put(custDailing.update)
    .delete(custDailing.delete)

router.route('/custDailing/find')
    .post(custDailing.find)   


router.route('/ipData')
    .get(ipData.index)
    .post(ipData.new)
    .put(ipData.update)
    .delete(ipData.delete)



router.route('/assest')
    .get(assest.index)
    .post(assest.new)
    .put(assest.update)
    .delete(assest.delete)

router.route('/assest/:id')
    .get(assest.findid)

router.route('/findassest/')
        .post(assest.find)



module.exports = router;
