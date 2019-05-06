require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const app = express();
app.use(
  cookieSession({
    maxAge: 1000 * 60 * 60 * 24,
    keys: ["asdfasdfasdf"]
  })
);

const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/api/places");
const Places = require("./models/Places");

let Place = require("./models/Places");
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./services/passport");
app.use(passport.initialize());
app.use(passport.session());

// DB Config
const db = require("./config/keys").mongoURI;
console.log(db);
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(routes);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
