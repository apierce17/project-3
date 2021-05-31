module.exports = app => {
    const emails = require("../controllers/emailController.js");
  
    var router = require("express").Router();

    router.post("/", emails.create);
  
    app.use("/api/email", router);
  };