const db = require("../models");
const StaffData = db.staffdata;
const Op = db.Sequelize.Op;

// Create and Save a new StaffData
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a StaffData
  const tutorial = {
    name: req.body.name,
    email: req.body.email,
    invite: req.body.invite ? req.body.invite : false
  };

  // Save StaffData in the database
  StaffData.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the StaffData."
      });
    });
};

// Retrieve all StaffData from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  StaffData.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving staffdata."
      });
    });
};

// Find a single StaffData with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  StaffData.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving StaffData with id=" + id
      });
    });
};

// Update a StaffData by the id in the request
exports.update = (req, res) => {
  const email = req.params.email;

  console.log("id =>", email, req.body)

  StaffData.update(req.body, {
    where: { email: email }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "StaffData was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update StaffData with id=${email}. Maybe StaffData was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating StaffData with id=" + email
      });
    });
};

// Update a StaffData by the id in the request
exports.updatedate = (req, res) => {
  const id = req.params.id;

  console.log("id =>", id, req.body)

  StaffData.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      console.log("num =>", num);
      if (num == 1) {
        res.send({
          message: "StaffData was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update StaffData with id=${id}. Maybe StaffData was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating StaffData with id=" + id
      });
    });
};

// Delete a StaffData with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  StaffData.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "StaffData was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete StaffData with id=${id}. Maybe StaffData was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete StaffData with id=" + id
      });
    });
};

// find all published StaffData
exports.findAllPublished = (req, res) => {
  StaffData.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving staffdata."
      });
    });
};
