const express = require("express");
const cors = require("cors");
const db = require("./config/db.config");
//app config
const app = express();
const port = process.env.PORT || 8080;

//middlewares
app.use(express.json());
app.use(cors());

//api routes
app.get("/", (req, res) =>
  res.status(200).send("Welcome to my instagram clone app")
);

require("./routes/user.routes")(app);

//listen
app.listen(port, () => console.log(`Listening on locahost: ${port}`));
