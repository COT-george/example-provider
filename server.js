const app = require('express')();
const cors = require('cors');
const routes = require('./src/product/product.routes');
const authMiddleware = require('./src/middleware/auth.middleware');

const port = 8080;

const init = () => {
    app.use(cors());
    app.use(routes);
    app.use(authMiddleware);
    if (process.NODE_ENV !== 'test') {
        return app.listen(port, () => console.log(`Provider API listening on port ${port}...`));
    }
};

init();
