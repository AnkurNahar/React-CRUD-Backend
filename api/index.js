const { Router } = require("express");
const userRoutes = require("./routes/user");

const loadRoutes = () => {

    const router = Router();

    userRoutes(router);
    

    return router;
}

module.exports = loadRoutes;