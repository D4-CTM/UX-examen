const db = require('./models/index');
const express = require('express');
const app = express();
const port = 3000;

const menuItemRouter = require('./routes/menuItemRoutes');

app.use('/api/', menuItemRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
