const{ Router } = require('express');

const router = Router();

const userController = require('../../controller/user.controller');


router.post('/user/signup',  userController.signup);
router.get('/user/login',  userController.getAllUsers);
router.delete('/user/login',  userController.remove);



module.exports = router;