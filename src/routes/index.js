const { Router } = require('express');

const spotifyRoute = require('./users/user.routes');

const router = Router();



//spotify routes
router.use(spotifyRoute);

module.exports = router;