// create a connection to our MongoDB database
const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect(process.env.DB_URL ?? "mongodb+srv://dungbachngoc20:WITMMCBSepzDoUDC@cluster-bndz.cx6ke1y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-bndz")
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((err) => {
      console.log("database connection failed. exiting now...");
      console.error(err);
      process.exit(1);
    });
}

module.exports = connect;
