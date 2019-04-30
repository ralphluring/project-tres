const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require("./routes/api/places");
const Places = require("./models/Places");

let Place = require('./models/Places');
app.use(cors());
// middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;
console.log(db)
// Connect to MongoDB
mongoose
  .connect(db,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/places",{ useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// });

app.use(routes);




const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));