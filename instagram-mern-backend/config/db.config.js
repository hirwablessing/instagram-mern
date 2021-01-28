const mongoose = require("mongoose");
const Pusher = require("pusher");
const dotenv = require("dotenv");
dotenv.config();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: process.env.USETLS_OPTION,
});

//DB config
mongoose.connect(process.env.CONNECTION_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.db = mongoose.connection.once("open", () => {
  // Connection to MongoDb was initialized

  //initialiaze a realtime watcher to watch for any change in the database
  const changeStream = mongoose.connection.collection("posts").watch();
  changeStream.on("change", (change) => {
    //Change triggered on pusher
   //End of change;

    if (change.operationType === "insert") {
      // Triggering Pusher **IMG UPLOAD**;

      //insert into post table

      const postDetails = change.fullDocument;
      pusher.trigger("posts", "inserted", {
        user: postDetails.user,
        caption: postDetails.caption,
        image: postDetails.image,
      });
    } else {
      console.log("Unknown trigger from Pusher");
    }
  });
});
