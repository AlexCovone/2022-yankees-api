const express = require('express');
const router = express.Router()

// @desc      Login/landing page
// @route     GET /
router.get('/', (req, res) => {
    res.render('home')
})



module.exports = router