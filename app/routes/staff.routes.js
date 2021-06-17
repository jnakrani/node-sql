module.exports = app => {
  const manages = require("../controllers/staff.controller.js");

  var router = require("express").Router();

  // Create a new Staff
  router.post("/", manages.create);

  // Retrieve all Staff
  router.get("/", manages.findAll);

  // Retrieve all published Staff
  router.get("/published", manages.findAllPublished);

  // Retrieve a single Staff with id
  router.get("/:id", manages.findOne);

  // Update a Staff with id
  router.put("/:email", manages.update);

  // Add a single Staff Start Time with id
  router.put("/date/:id", manages.updatedate);

  // Delete a Staff with id
  router.delete("/:id", manages.delete);

  app.use('/api/manages', router);
};
