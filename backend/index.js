const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectMongoDB = require('./dbConfig/connectMongoDB');
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

connectMongoDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on the PORT : ${process.env.PORT}`);
});