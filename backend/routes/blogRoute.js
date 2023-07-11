const { createBlog, readBlog, updateBlog, deleteBlog } = require('../controller/blogController');

const router = require('express').Router();

// api to perform blog CRUD start
router.route('/create/blog')
    .post(createBlog)
    .get(readBlog)

router.route('/create/blog/:id')
    .put(updateBlog)
    .delete(deleteBlog)
// api to perform blog CRUD end

module.exports = router;