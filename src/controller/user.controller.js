const {req,res, next} = require('express')
const appPath = require('app-root-path');
const dotenv = require('dotenv');
const User = require('../model/user.model')


dotenv.config({ path: `${appPath}/.env` });


exports.signup = async (req, res, next) => {
    try{
     const {email, password} = req.body
     const user = await user.create({ email: email, password: password})
     res.status(201).json(user)

    }catch(err){
       console.error(err);
    }
  
  };

  exports.getAllUsers = async (req, res, next) => {
   try{
      const {email, password} = req.body
      const user = user.find()
      res.status(200).json(user)
   }catch(err){
      console.error(err);
   }
 
 };

 exports.remove = async (req, res, next) => {
   try{
      const {email, password} = req.body
      const user = user.delete()
   }catch(err){
      console.error(err);
   }
 
 };
