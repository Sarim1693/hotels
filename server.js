const express=require('express');
const app=express();
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json())
app.get('/', function(req, res){
    res.send('Hello Welcome to my restuarent')
});
const menuRoutes=require('./routes/menuRoutes');
app.use('/Menu', menuRoutes);
const personRoutes=require('./routes/personRoutes');
app.use('/person', personRoutes)
app.listen(3000, ()=>{
    console.log('Server running at port 3000');
})