const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectMongoDB = require('./dbConfig/connectMongoDB');
const blogModel = require('./models/blog');
dotenv.config();

const app = express();
// middleware functions start
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
// middleware functions end

// function to establish mongodb connections
connectMongoDB();

// Blog router
app.use(require('./routes/blogRoute'));

// server listening  (.env obtained from the environment variables)
app.listen(process.env.PORT, () => {
    console.log(`Server is running on the PORT : ${process.env.PORT}`);
});