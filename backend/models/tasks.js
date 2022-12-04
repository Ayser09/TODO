//creating task model
const mongoose= require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    task:{
        type:String,
        required:true
    },
    completed:{
        type:String,
        default:false
    } 
})

module.exports = mongoose.model("task", taskSchema)