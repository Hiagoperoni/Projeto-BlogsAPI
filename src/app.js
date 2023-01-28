const express = require('express');
require('express-async-errors');
const loginRouter = require('./routes/loginRoutes');
const userRouter = require('./routes/userRoutes');
const categoryRouter = require('./routes/categoriesRoutes');
const { errorMidd } = require('./Middlewares/errorMidd');

// ...

const app = express();

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use(errorMidd);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
