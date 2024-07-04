
//cet table pour les demandes qui sont acceptee


const {  DataTypes } = require('sequelize')
const sequelize=require('../config/Database');

 let Project =sequelize.define('Project',{
    id_project:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true 
    },
    title:{
        type:DataTypes.STRING,
    }, 
 })
 
 
module.exports=Project