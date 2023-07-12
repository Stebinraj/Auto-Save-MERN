const mongoose = require('mongoose');

// schema designing of blog app
const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        author: {
            type: String,
            default: ''
        },
        categories: {
            type: String,
            default: ''
        },
        isPublished: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);


const blogModel = mongoose.model('blogs', blogSchema);

module.exports = blogModel;