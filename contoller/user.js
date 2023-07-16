

import express from 'express';
import ErrorHandler from '../utils/Errorhandler.js';
import {User} from "../model/userModel.js"

import { catchAsyncError } from '../middlewares/catchAsyncError.js';

export const newUser = catchAsyncError(async (req,res,next)=>{

   


    const user = await User.findOne({email:"prajwal@gmail.com"})

  if(user)
  {
      return next(new ErrorHandler("User Already Exist",404));
  }
await User.create({
  name:"prajwal sunil Chitode",
  email:"prajwal@gmail.com"
})
  res.status(200).json({
      message:"User Created Successfully"
  })
      
  
  
  })

