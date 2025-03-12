const express = require('express');
const IndexController = require('../controllers/index');

const setRoutes = (app) => {
    const router = express.Router();
    const indexController = new IndexController();

    // Define your routes here
    router.get('/api/waste', indexController.getWaste);
    router.post('/api/waste', indexController.createWaste);
    router.put('/api/waste/:id', indexController.updateWaste);
    router.delete('/api/waste/:id', indexController.deleteWaste);

    app.use(router);
};

module.exports = setRoutes;