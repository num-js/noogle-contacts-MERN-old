const mongoose = require('mongoose');
const contactsModel = require('../models/contactsModel');

//Get All Contacts
const getContacts = async (req, res) => {
    try {
        const allContacts = await contactsModel.find();
        res.status(200).json(allContacts);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

//Create a Contact
const createContact = async (req, res) => {
    const newContactData = new contactsModel(req.body);
    try {
        await newContactData.save();
        res.status(201).json(newContactData);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

//Get a Specific Contact
const getSpecificContact = async (req, res) => {
    try {
        const specificContact = await contactsModel.findById(req.params.contact_id);
        res.status(200).json(specificContact);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

//Edit a Contact
// const editContact = async (req, res) => {
//     try{
//         const  = 
//     }
// }

//Delete Contact
const deleteContact = async (req, res) => {
    try {
        const deletedContact = await contactsModel.findByIdAndDelete({ _id: req.params.contact_id });
        res.status(200).json(deletedContact);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

//Update Contact
const updateContact = async (req, res) => {
    const { contact_id: _id } = req.params;
    const updateContactData = req.body;
    try {
        const updatedContact = await contactsModel.findByIdAndUpdate(_id, updateContactData, {new: true});
        // const updatedContact = await  contactsModel.findByIdAndUpdate(req.params.contact_id, res.body, {new: true});
        res.status(200).json(updatedContact);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}



module.exports = { getContacts, createContact, getSpecificContact, deleteContact, updateContact }