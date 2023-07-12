const googleDocModel = require("../models/googleDoc");

// business logics to create document
const createDoc = async (req, res) => {
    try {
        const { text } = req.body;

        const googleDocData = new googleDocModel({
            text: text
        });

        const saveGoogleDocDataToDB = await googleDocData.save();

        if (saveGoogleDocDataToDB) {
            res.send({ mesage: "Document Created", success: true });
        } else {
            throw { message: "Error happened while creating document", success: false };
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// business logics to read document
const readDoc = async (req, res) => {
    try {
        const readDocument = await googleDocModel.find({});

        res.send({ data: readDocument, success: true });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// business logics to update document
const updateDoc = async (req, res) => {
    try {
        const { id } = req.params;

        const documentData = req.body;

        const updatedDocumentData = await googleDocModel.findByIdAndUpdate(id, { $set: documentData }, { new: true });
        if (updatedDocumentData) {
            res.send({ message: "Document updated", success: true });
        } else {
            throw { message: "Document not found", success: false };
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// business logics to delete blog
const deleteDoc = async (req, res) => {
    try {
        const { id } = req.params
        const deletedDocumentData = await googleDocModel.findByIdAndDelete(id);
        if (deletedDocumentData) {
            res.send({ message: "Document deleted", success: true });
        } else {
            throw { message: "Error happpened while deleting", success: false };
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { createDoc, readDoc, updateDoc, deleteDoc };