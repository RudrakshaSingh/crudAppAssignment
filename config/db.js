const mongoose = require("mongoose")

const connectToDb = async()=>{mongoose.connect(process.env.DB_URL)
    .then((conn)=>{
    console.log(`Connected to DB: ${conn.connection.host}`);
})
.catch((err)=>{console.log("error connecting to db", err.message)})}

module.exports=connectToDb