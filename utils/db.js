import mongoose from "mongoose";
const MONGO_URI = 'mongodb://localhost:27017'; 

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    console.error("Error connecting to Mongoose:", error.message);
    throw new Error("Error connecting to Mongoose");
  }
};

export default connect;
