
import mongoose from "mongoose";

// export const connectDb = async ()=> { await mongoose.connect('mongodb://localhost:27017').then(()=>{
// console.log("Database connected successfully");
// }).catch(()=>{
//     console.log("An error occured");
// })
// };


export const connectDb = async () =>{

try {

    const {connection} = await mongoose.connect('mongodb://localhost:27017/Error-handling');

    console.log(`Connected with ${connection.host}`)
    
} catch (error) {
    console.log(error);
}

}