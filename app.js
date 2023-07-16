
import express from 'express';
import router from './routes/user.js';

import { newUser } from './contoller/user.js';
import errorMiddleware from './middlewares/error.js';
import { connectDb } from './database/db.js';

const app = express();

app.use('/new',newUser);

connectDb();

app.use(errorMiddleware);

app.listen(3500, ()=>{

    console.log("Server is working on port 3500");
})