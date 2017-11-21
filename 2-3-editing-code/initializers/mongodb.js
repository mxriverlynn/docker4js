const mongoose = require("mongoose");
const epa = require("epa").getEnvironment();

// mongodb connection info
const mongoConfig = epa.get("mongodb");

// mongoose promise config
mongoose.Promise = global.Promise;

// mongoose initialization
function initialize(next){
  const options = {
    useMongoClient: true
  };

  mongoose
    .connect(mongoConfig, options)
    .then(() => {
      console.log("Connected To MongoDB.");
      return next();
    })
    .catch((err) => {
      if (err) {
        console.log("ERROR CONNECTING TO MONGODB!");
        return next(err);
      }
    });
}

module.exports = initialize;
