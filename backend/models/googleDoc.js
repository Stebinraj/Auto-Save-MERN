const mongoose = require('mongoose');

// Schema designing of google docs
const googleDocSchema = mongoose.Schema({
    title: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    }
});

const googleDocModel = mongoose.model('google-docs', googleDocSchema);

module.exports = googleDocModel;