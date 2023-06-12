const mongoose = require("mongoose");
const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_IP,
    MONGO_PORT,
} = require("./config");

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectDB = () => {
    mongoose
        .connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
        })
        .then(() => {
            console.log("successfully connected to DB");
        })
        .catch((e) => {
            console.log(e.message);
            process.exit(1);
        });
};

module.exports = connectDB;
