'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gallery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      gallery.belongsTo(models.user, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE'
      });
    }
  }
  gallery.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    image_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  }, {
    sequelize,
    modelName: 'gallery',
  });
  return gallery;
};