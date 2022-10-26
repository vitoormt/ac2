
const mongoose = require('mongoose')
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userAdmin:userAdmin@cluster0.qn5eogk.mongodb.net/test')
}


module.exports = conn