const {  DataTypes } = require('sequelize')
const sequelize=require('../config/Database')
const Project = require('./Projects')

let Demande = sequelize.define('Demande',{
    id_demande:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
    },
    servicetype:{
        type:DataTypes.ENUM('Web Developing','mobile Developing','Video Editing','Blockchain Developing')
    },
    status: {
        type: DataTypes.ENUM('pending', 'accepted', 'refused'),
        defaultValue: 'pending'
      },
    details:{
        type:DataTypes.STRING(255)
    }
      },{
        timestamps: false 
    })
    //cette id_demande (acceptee) va etre migreer vers la table project
Demande.hasOne(Project,{
    foreignKey:'id_demande'
})
  
 module.exports=Demande