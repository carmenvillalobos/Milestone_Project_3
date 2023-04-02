'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destinations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Destinations.init({
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    booking_secured: DataTypes.BOOLEAN,
    account_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Destinations',
    tableName: 'destinations'
  });
  return Destinations;
};