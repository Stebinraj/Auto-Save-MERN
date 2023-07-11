const mongoose = require('mongoose');

// schema designing of blog app
const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        categories: {
            type: String,
            required: true,
            unique: true
        },
        image: {
            type: String
        }
    },
    {
        timestamps: true
    }
);


const blogModel = mongoose.model('blogs', blogSchema);

module.exports = blogModel;