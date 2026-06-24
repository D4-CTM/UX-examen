const db = require('./models/index');
const express = require('express');
const app = express();
const port = 3000;

const menuItemRouter = require('./routes/menuItemRoutes');
const billRoutes = require('./routes/billRoutes');

app.use('/api/', menuItemRouter)
app.use('/api/', billRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
