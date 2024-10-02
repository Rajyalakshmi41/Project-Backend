require('dotenv').config()
const mongoose = require('mongoose')
const {DB_NAME}= require('./constants')
const MongoDb = require('./db/db')


















// const mongoose  = require('mongoose')
// const { DB_NAME } = require('./constants')
// const express = require('express')

// (async()=>{

//      try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listening at port ${process.env.PORT}`)
//         })


//     }catch(err){
//         console.log("error", err)
//     }

// })()