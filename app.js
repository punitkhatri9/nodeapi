const express = require('express');
const createError = require('http-errors');
const dotenv = require('dotenv').config();
const UserRoute = require('./Routes/User.route');
const ProductRoute = require('./Routes/Product.route');
const CategoreiesRoute = require('./Routes/Categories.route');
const FormRoute = require('./Routes/Form.route');
const ContactRoute = require('./Routes/Contactus.route');
const ContentsRoute = require('./Routes/Contents.route');
const SubmenuRoute = require('./Routes/Submenu.route');
const MenuRoute = require('./Routes/Menu.route');
const FooterRoute = require('./Routes/Footer.route');
const MenuIconRoute = require('./Routes/MenuIcon.route');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize DB
require('./initDB')();


app.use('/products', ProductRoute);
app.use('/user', UserRoute);
app.use('/categoires',CategoreiesRoute);
app.use('/form',FormRoute);
app.use('/contact',ContactRoute);
app.use('/contents',ContentsRoute);
app.use('/submenu',SubmenuRoute);
app.use('/menu',MenuRoute);
app.use('/menuicon',MenuIconRoute);
app.use('/footer',FooterRoute);
//404 handler and pass to error handler


app.use((req, res, next) => {
  /*
  const err = new Error('Not found');
  err.status = 404;
  next(err);
  */
  // You can use the above code if your not using the http-errors module
  next(createError(404, 'Not found'));
});

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT + '...');
});
