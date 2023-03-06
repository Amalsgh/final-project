// 1 require express
const express = require('express');

// 2 create instance
const app = express();

//5 require .env & configue
require('dotenv').config();

// 6 connect Db
const connectDb = require('./config/connectDb');
connectDb();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
	express.urlencoded({
		extended: true,
	})
);

// 7 routes
// middleware global
app.use(express.json());
// midleware route
app.use('/api/user', require('./routes/user'));
app.use('/api/product', require('./routes/product'));
app.use('/api/admin', require('./routes/admin'));
app.use ('/api/order' , require ('./routes/order'))




// 3 create PORT
const PORT = process.env.PORT;

//4 create server
app.listen(PORT, (error) => {
  error
    ? console.error(`Failed to connect to ${PORT}`)
    : console.log(`Connected to ${PORT}`);
});
