const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/connect');
const routes = require('./routes');

const { swaggerUi, swaggerSpec } = require('./swagger'); // 👈 import Swagger

const app = express();
const port = process.env.PORT || 8080;

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)) // 👈 Swagger route
  .use('/', routes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
    console.log(`📘 Swagger docs available at http://localhost:${port}/api-docs`);
  });
});
