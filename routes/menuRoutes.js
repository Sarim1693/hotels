const express=require('express');
const router=express.Router();
const MenuItem=require('./../models/Menu');
const Person = require('../models/person');

router.post('/', async (req, res)=>{
    try{
        const data=req.body;
        const newMenu=new MenuItem(data);
        const response=await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).send({error: "Internal Server Error"});
    }
})
// comment added
router.get('/', async (req, res)=>{
    try{
        const data=await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
})
router.get('/:userTaste', async (req,res)=>{
    try{
        const userTaste=req.params.userTaste;
        if(userTaste=='sour' || userTaste=='salty'|| userTaste=='sweet'){
            const response= await MenuItem.find({taste: userTaste});
            console.log('data fetched ');
            res.status(200).json(response);
        }
    }
    catch(err){
         console.log(err);
        res.status(500).json({error: "Internal Server Error"});
    }
})
module.exports=router;
