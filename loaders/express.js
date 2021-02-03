const bodyParser = require("body-parser");
const loadRoutes = require("../api");
const cors = require('cors');

const expressLoader = (app) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(loadRoutes());

}

module.exports = expressLoader;