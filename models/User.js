const mongoose = require('mongoose');
const { Schema } = mongoose;

const authSchema = new Schema({
    googleId: String
})

mongoose.model('users',authSchema);