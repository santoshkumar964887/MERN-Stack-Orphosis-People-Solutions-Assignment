const app = require("./app");
const dotenv = require("dotenv");
const mongooes = require("mongoose");
const bodyParser = require('body-parser');
dotenv.config({ path: "./config.env" });
//connecting with MongoDB server
const port = process.env.PORT || 9000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
  if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client-side/build')));
      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client-side/build', 'index.html'));
    });
  }
// Listening to  server on port number 9000

app.listen(port, () => {
  console.log("App is running on port number ", port);
});
