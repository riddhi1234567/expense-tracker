const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
       await mongoose.connect(
        process.env.MONGO_URL,
       {
        useUnifiedTopology: true,
        useNewUrlParser: true, 
        autoIndex: true,
       }
    );
       console.log(`DB connected Succesfully`);
    } catch (error) {
        console.log(`Error ${error.message}`);
    }
};

module.exports = dbConnect;