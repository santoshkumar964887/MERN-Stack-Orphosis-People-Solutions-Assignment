const app = require("./app");
const dotenv = require("dotenv");
const mongooes = require("mongoose");
dotenv.config({ path: "./config.env" });
//connecting with MongoDB server
mongooes
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("data base connected");
  });
// Listening to  server on port number 9000
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log("App is running on port number ", port);
});
