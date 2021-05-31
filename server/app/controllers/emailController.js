const db = require("../models");
const Email = db.emails;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.userEmail) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }


  const email = new Email({
    userEmail: req.body.userEmail
  });

  // Save in the database
email.save(email)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Email."
      });
    });
};