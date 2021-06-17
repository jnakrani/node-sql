module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("staff", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    invite: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};
