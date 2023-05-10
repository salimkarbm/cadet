const {req,res, next} = require('express')
const appPath = require('app-root-path');
const dotenv = require('dotenv');
const User = require('./models/user');


dotenv.config({ path: `${appPath}/.env` });


exports.signup = async (req, res, next) => {
    try{
     const {email, password} = req.body
     const user = await user.create({ email: email, password: password})

    }catch(err){
       console.error(err);
    }
  
  };

  exports.login = async (req, res, next) => {
   try{
      const {email, password} = req.body
      const user = user.findOne({ email: email, password: password})
   }catch(err){
      console.error(err);
   }
 
 };


