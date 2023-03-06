// 1 requir mongoose
const mongoose = require ("mongoose");

//2 connect Db
const connectDb = async () => {
    try { 
        await mongoose.connect (process.env.DB_URI);
        console.log("Database conected");
    }catch (error) {
        console.log("Database is not connected", error);
    }
};

module.exports = connectDb;
