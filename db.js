const mongoose=require('mongoose');
const mongoURL= 'mongodb://localhost:27017/hotels'
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('Database connected');
})
db.on('error',(err)=>{
    console.log('Error occued in database ',err);
})
db.on('disconnected', ()=>{
    console.log('Monog db disconnected');
})
module.exports=db;