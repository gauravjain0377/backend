
const { userVerification } = require('../Middlewares/AuthMiddleware');
const router = require('express').Router();

// Protected route (you can rename '/' to something like '/verify' if needed)
router.post('/verify', userVerification);


module.exports = router;
