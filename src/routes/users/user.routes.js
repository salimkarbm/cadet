const{ Router } = require('express');

const router = Router();

const userController = require('../../controller/user.controller');


router.post('/user/signup',  userController.signup);
router.get('/user/getAll',  userController.getAllUsers);
router.delete('/user/delete',  userController.remove);



module.exports = router;