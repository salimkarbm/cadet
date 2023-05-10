const{ Router } = require('express');

const router = Router();

const userController = require('../../controller/user.controller');


router.post('/user/signup',  userController.signup);
router.get('/user/',  userController.getAllUsers);
router.delete('/user/',  userController.remove);



module.exports = router;