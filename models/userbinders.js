'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserBinders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserBinders.init({
    BinderId: DataTypes.INTEGER,
    BinderTitle: DataTypes.STRING,
    UserId: DataTypes.STRING,
    DateCreated: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserBinders',
  });
  return UserBinders;
};