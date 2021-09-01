const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
username:{
    type: String,
    default:"hello world"
}
})

module.exports = mongoose.model('User', UserSchema);