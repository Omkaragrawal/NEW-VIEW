const { Sequelize, DataTypes } = require("sequelize");
/*
 **************************DataBase Connection**************************************************************
 */

const sequelize = new Sequelize(
  "postgres://ccacmgcgatmlhg:3e1f84815fd70e2de50506937587d2b27325e1ea3bbc56bc9a4bb0bde4f73bed@ec2-34-198-103-34.compute-1.amazonaws.com:5432/dgsoeot8uqjgu"
);
async function ConnectDB() {
  try {
    await sequelize.authenticate();
    console.log("DataBase Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

ConnectDB();

//*****************************************Databases******************************************************************
const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  }
);

module.exports = { sequelize, User };
