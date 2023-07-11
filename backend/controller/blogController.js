const blogModel = require("../models/blog");

// business logics to create blog
const createBlog = async (req, res) => {
    try {
        const { title, content, author, categories, image } = req.body;

        const blogData = new blogModel({
            title: title,
            content: content,
            author: author,
            categories: categories,
            image: image
        });

        const saveBlogDataToDB = await blogData.save();
        
        if (saveBlogDataToDB) {
            res.send({ mesage: "Blog Created", success: true });
        } else {
            throw { message: "Error happened while creating blog", success: false };
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// business logics to read blog
const readBlog = async (req, res) => {
    try {
        const readBlog = await blogModel.find({});

        res.send({ data: readBlog, success: true });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// business logics to update blog
const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const blogData = req.body;

        const updatedBlogData = await blogModel.findByIdAndUpdate(id, { $set: blogData }, { new: true });
        if (updatedBlogData) {
            res.send({ message: "Blog updated", success: true });
        } else {
            throw { message: "Blog not found", success: false };
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// business logics to delete blog
const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params
        const deletedBlogData = await blogModel.findByIdAndDelete(id);
        if (deletedBlogData) {
            res.send({ message: "Blog deleted", success: true });
        } else {
            throw { message: "Error happpened while deleting", success: false };
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { createBlog, readBlog, updateBlog, deleteBlog };