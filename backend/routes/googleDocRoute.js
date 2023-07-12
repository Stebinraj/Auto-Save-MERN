const { createDoc, readDoc, updateDoc, deleteDoc } = require('../controller/googleDocController');

const router = require('express').Router();

// api to perform googleDoc CRUD start
router.route('/doc')
    .post(createDoc)
    .get(readDoc)

router.route('/doc/:id')
    .put(updateDoc)
    .delete(deleteDoc)
// api to perform googleDoc CRUD end

module.exports = router;