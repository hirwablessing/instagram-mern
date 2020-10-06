const userController = require("../controllers/user.controller");

module.exports = function (app) {
  //   app.use(function (req, res, next) {
  //     res.header(
  //       "Access-Control-Allow-Headers",
  //       "x-access-token, Origin, Content-Type, Accept"
  //     );
  //     next();
  //   });

  app.post("/upload", userController.postImage);
  app.get("/sync", userController.findPost);
};
