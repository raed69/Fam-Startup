const express= require('express')
const bodyParser = require('body-parser');
const cors =require('cors');
const sequelize = require('./src/config/Database');
require('dotenv').config();
const usermodel =require('./src/models/User')
const projectmodel=require('./src/models/Projects')
const demandemodel=require('./src/models/Demande')

const authRoutes=require('./src/routes/Auth')

const app = express()
app.use(bodyParser.json());
app.use(cors())

//authentification/////
app.use('/auth', authRoutes);










/////////Submit Demande//////











// Sync the database and start the server
sequelize.sync()   
  .then(() => {
    console.log('database is synced !');
    
    // Continue with starting the server
    app.listen(5000, () => {
      console.log('Server is running on port 5000!');
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

