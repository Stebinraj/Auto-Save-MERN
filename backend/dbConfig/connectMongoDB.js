const mongoose = require('mongoose');

const connectMongoDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully!!!');
        });

        connection.on('error', (error) => {
            console.log(`MongoDB connection error. Please make sure MongoDB is running ${error}`);
            process.exit();
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectMongoDB;
