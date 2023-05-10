const{ Router } = require('express');

const router = Router();

const userController = require('../../controller/user.controller');


router.post('/user/signup',  userController.signup);
router.post('/user/login',  userController.login);



module.exports = router;