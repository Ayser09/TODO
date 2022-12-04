const mongoose = require('mongoose')

module.exports = (async () =>{
    const connectionParams ={
        useNewUrlParser:true,  useUnifiedTopology:true
    }
    const connection = await mongoose.connect('mongodb://localhost/todo-app', connectionParams)
    connection ?console.log("connected to database"): console.log("connection failed")
})  