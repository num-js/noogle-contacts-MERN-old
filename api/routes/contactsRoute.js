const express = require('express');
const { getContacts, createContact, getSpecificContact, deleteContact, updateContact } = require('../controllers/contactsController');

const router = express.Router();

router.get('/get_contacts', getContacts);

router.post('/create_contact', createContact );

router.get('/get_specific_contact/:contact_id', getSpecificContact );

router.delete('/delete_contact/:contact_id', deleteContact );

router.patch('/update_contact/:contact_id', updateContact );


module.exports = router;