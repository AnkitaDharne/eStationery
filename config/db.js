const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://admin:admin%40321@estationary.brodh.mongodb.net/eStationery";
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;
