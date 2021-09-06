const router = require('express').Router();

let assest = require('./controller/assest.controller');


router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

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
