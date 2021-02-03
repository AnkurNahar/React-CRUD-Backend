const userControllers = require('../controllers/user');
const { sanitizeForm, validateForm, validateUpdate } = require('../middlewares/validation');

const { Router } = require('express');

const router = Router();

const userRoutes = (app) => {

    router.get('/get-list', userControllers.getList);

    router.post('/create', sanitizeForm, validateForm, userControllers.createUser);

    router.patch('/update/:id', sanitizeForm, validateUpdate , userControllers.updateUser);

    router.delete('/delete/:id', sanitizeForm,  userControllers.deleteUser);


    app.use('/users', router);
}

module.exports = userRoutes;