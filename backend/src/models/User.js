const {  DataTypes } = require('sequelize')
const sequelize=require('../config/Database');
const Demande = require('./Demande');
let User = sequelize.define('User',{
    id_user: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name:{
        type:DataTypes.STRING,
      },
      lastname:{
        type:DataTypes.STRING
      },
      email:{
        type:DataTypes.STRING
      },
      password:{
        type:DataTypes.STRING
      },
      phone:{
        type:DataTypes.INTEGER(8)
      },
      },{
        timestamps: false // Désactive les timestamps
    })
    User.hasMany(Demande, {
        foreignKey: 'id_user', 
       
      });
module.exports = User