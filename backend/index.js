require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const connection = require("./db")
const tasks = require('./routes/tasks')

//databse
connection()


//middlewares
app.use(express.json())
app.use(cors())

//routes 
app.use("/api/tasks", tasks) 

//listening to port
const port = process.env.port || 5500
app.listen(port, () => console.log(`Listening on port ${port}.`))