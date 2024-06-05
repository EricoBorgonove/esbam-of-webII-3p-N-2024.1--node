'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    firstName: DataTypes.STRING(150),
    lastName: DataTypes.STRING(150),
    email: DataTypes.STRING(150),
    password: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};