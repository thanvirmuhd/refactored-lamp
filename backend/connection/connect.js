const mongoose = require("mongoose");

const connection = async () => {
  try {
    const db = await mongoose.createConnection("mongodb+srv://user:user123@cluster0.i6qhurv.mongodb.net/");
    console.log("connected");
  } catch (error) {
    console.log("not connected");
  }
};

connection();
