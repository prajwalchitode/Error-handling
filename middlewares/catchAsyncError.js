
// It is used to remeove the constant use of try and cathc block in our code 
export const catchAsyncError = (passedfunction)=> (req,res,next)=>{

    Promise.resolve(passedfunction(req,res,next)).catch(next);

}