const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async(url) =>{
  return await mongoose.connect(url)
  .then(()=>console.log("Database Connected"))
  .catch((err)=>console.log(err))
}

module.exports = connectDB;