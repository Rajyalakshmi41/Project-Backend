const mongoose = require('mongoose')

const {DB_NAME} = require('../constants')


const ConnectToMongo =async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

    }catch(err){
        console.log('error',err)

    }



}

module.exports = ConnectToMongo