const express = require('express');
const { getContacts, createContact } = require('../controllers/contactsController');

const router = express.Router();

router.get('/getContacts', getContacts);

router.post('/createContact', createContact );



module.exports = router;