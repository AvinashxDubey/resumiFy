const mongoose = require('mongoose');
require('dotenv').config(); //loading environment var and shiii

const connectDb = async () => {
    // Connect to MongoDB
    try{
        const conn  = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB created: ${conn.connection.host}`);
    }
    catch(e){
        console.error(`Error: ${e.message}`);
        process.exit(1); //stop the server if db connection fails
    }
}

module.exports = connectDb;