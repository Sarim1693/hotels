const express=require('express');
const app=express();
const db=require('./db');
const bodyParser=require('body-parser');
const passport=require('./auth');           
app.use(bodyParser.json())
//Middle ware function
const logRequest=(req, res, next)=>{
    console.log(`${new Date().toLocaleString()} request made to: ${req.originalUrl}`);
    next();
}
app.use(logRequest);


app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local', {session:false});
app.get('/',  function(req, res){
    res.send('Welcome to our hotel');
})

 app.get('/', function(req, res){
     res.send('Hello Welcome to my restuarent')
 });
const menuRoutes=require('./routes/menuRoutes');
const personRoutes=require('./routes/personRoutes');
app.use('/Menu', menuRoutes);
app.use('/person', localAuthMiddleware,personRoutes)
app.listen(3000, ()=>{
    console.log('Server running at port 3000');
})