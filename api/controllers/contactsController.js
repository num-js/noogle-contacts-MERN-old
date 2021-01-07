const mongoose = require('mongoose');
const contactsModel = require('../models/contactsModel');

const getContacts = async (req, res) => {
    try {
        const allContacts = await contactsModel.find();
        res.status(200).json(allContacts);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const createContact = async (req, res) => {
    const newContactData = new contactsModel(req.body);
    try {
        await newContactData.save();
        res.status(201).json(newContactData);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

module.exports = { getContacts, createContact }