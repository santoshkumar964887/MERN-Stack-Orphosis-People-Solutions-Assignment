//dealing async and await try catch
module.exports=fn=>{
    return(req,res,next)=>{
        fn(req,res,next).catch(next)
    }
}