const mongoose = require('mongoose');
const { Schema } = mongoose;

const mailSchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [String],
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
});

mongoose.model('mails',mailSchema);